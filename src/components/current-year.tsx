"use client";
import { useState, useEffect } from "react";

export default function CurrentYear() {
  const [year, setYear] = useState(0);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return <>{year || 2025}</>;
}
