"use client";

import { apiUrl } from "@/utils/util";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const RecorduudContext = createContext();

export const RecorduudProvider = ({ children }) => {
  const [recorduudData, setRecorduudData] = useState(null);
  const getRecordData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/orderuud`);
      console.log(
        "recorduud-context iin guilgeenuudiig harah : ",
        response.data.recorduud
      );
      setRecorduudData({ recs: response.data.recorduud });
    } catch (error) {
      console.error(error);
      toast.error(
        "recorduud contextiin guilgeenii datanuudiig harah amjiltgui"
      );
    }
  };
  useEffect(() => {
    getRecordData();
  }, []);
  return (
    <RecorduudContext.Provider value={{ recs: recorduudData.recs }}>
      {children}
    </RecorduudContext.Provider>
  );
};
