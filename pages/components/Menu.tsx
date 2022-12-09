/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, ButtonProps } from "@mantine/core";
import { GithubIcon } from "@mantine/ds";

/**
 * get function
 * @param url 
 * @returns 
 */
function get(url: string) {
  const [data, setData]: any = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return data;
}

/**
 * return github button
 * @param props 
 * @returns 
 */
function GithubButton(props: ButtonProps) {
  const router = useRouter();
  const link = get("/api/links");

  return (
    <Button
      {...props}
      leftIcon={<GithubIcon size={16} />}
      sx={(theme) => ({
        backgroundColor:
          theme.colors.dark[theme.colorScheme === "dark" ? 9 : 6],
        color: "#fff",
        "&:hover": {
          backgroundColor:
            theme.colors.dark[theme.colorScheme === "dark" ? 9 : 6],
        },
      })}
      onClick={() => router.push(link.github)}
    >
      Check me out
    </Button>
  );
}

/**
 * Menu Component
 * @returns 
 */
const Menu = () => {
  const [data, setData]: any = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/master")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <>
      <ul>
        {data.menu.elements.map((value: any) => (
          <li key={value}>{value}</li>
        ))}
        <GithubButton />
      </ul>
    </>
  );
};

export default Menu;
