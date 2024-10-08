"use client";
import styles from "./style.module.scss";
import React from "react";
export default function Index({ index, title, manageModal, href }) {
  return (
    <div
      onClick={(e) => manageModal(true, index, e.clientX, e.clientY, href)}
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={styles.project}
    >
      <h2>{title}</h2>

      <p>Front-end Developer</p>
    </div>
  );
}
