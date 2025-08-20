"use client";
import React, { createContext, useContext, useState } from "react";

type PageContextType = {
    currentPage: string;
    setCurrentPage: (page: string) => void;
};


// create context
const PageContext = createContext<PageContextType | undefined>(undefined);



// create provider
export function PageProvider({ children }: { children: React.ReactNode }) {
    const [currentPage, setCurrentPage] = useState<string>("");

    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            {children}
        </PageContext.Provider>
    );
}


// custom hook 
export function usePage() {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error("usePage must be used within a PageProvider");
    }
    return context;
}