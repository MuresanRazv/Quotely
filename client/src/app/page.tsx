"use client";
import Image from "next/image";

export default function Home() {
  const getQuote = () => {
    fetch("http://quotely-api:3030/quotes")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Handle the JSON data here
        // You can also return the data if needed
        return data;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={getQuote}>Press!</button>
    </main>
  );
}
