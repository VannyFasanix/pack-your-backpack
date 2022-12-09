/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <>
      <Menu />
    </>
  );
}
