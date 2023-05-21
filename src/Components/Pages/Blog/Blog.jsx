import React, { useRef } from "react";
import { toast } from "react-toastify";

const Blog = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () => toast("success"),
  });

  const questions = [
    {
      id: 1,
      question:
        "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
      ans: " An access token and a refresh token are commonly used in authentication and authorization mechanisms to secure API requests. Here's an explanation of what they are, how they work, and where you should store them on the client-side:  Access Token:  An access token is a credential that is obtained by a client (such as a web or mobile application) after successful authentication with a server. It is a short-lived token with a limited lifespan, typically valid for a few minutes or hours. The access token is used to authenticate and authorize subsequent requests to protected resources or APIs. It contains information such as the user's identity, permissions, and other relevant data that the server can use to make access control decisions. Refresh Token:  A refresh token is a long-lived credential used to obtain a new access token once the previous one expires. It is typically issued alongside the access token during the initial authentication process. Unlike access tokens, refresh tokens have a longer lifespan, usually valid for days, weeks, or even months. When the access token expires, the client can use the refresh token to request a new access token without re-authenticating the user. How They Work:  After a user authenticates and receives an access token and refresh token, the access token is included in the authorization header of each API request made by the client. The server verifies the access token's validity, expiration, and the user's permissions before processing the request. If the access token expires, the client can use the refresh token to request a new access token from the server. The server verifies the refresh token and, if valid, issues a new access token to the client. This process continues until the refresh token itself expires or is revoked. ",
    },
    {
      id: 2,
      question: "Compare SQL and NoSQL databases? ",
      ans: "SQL Databases:  Use tables with predefined schemas. Enforce strict data consistency and integrity. Use SQL for querying and manipulation. Scale vertically by adding more resources to a single server. Prioritize data consistency with ACID properties. NoSQL Databases:  Have flexible and dynamic data models. Allow for schemaless data storage. Use their own query languages or APIs. Scale horizontally by adding more servers. Focus on scalability and handling big data. May sacrifice strict data consistency for performance and scalability.",
    },
    {
      id: 3,
      question: "What is express js? What is Nest JS",
      ans: "Express.js is a popular and lightweight web application framework for Node.js. It provides a simple and minimalist approach to building web servers and APIs. Express.js allows developers to handle routes, middleware, and HTTP requests and responses easily. It provides a set of functions and utilities to build web applications, define routes, handle HTTP requests, and render views. Express.js is known for its flexibility and extensibility, allowing developers to add additional functionality through middleware and third-party modules.",
    },
    {
      id: 4,
      question: "What is MongoDB aggregate and how does it work",
      ans: "The aggregate function works by creating a pipeline of multiple stages, where each stage performs a specific operation on the input data and passes the transformed data to the next stage. The stages are processed sequentially, allowing you to perform a series of operations to shape and manipulate the data as needed",
    },
  ];

  return (
    <div className="mt-4 grid grid-cols-1 gap-5 container mx-auto">
      {questions.map((q) => (
        <article class="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
          <div class="flex items-start sm:gap-8">
            <div
              class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
              aria-hidden="true"
            >
              <div class="flex items-center gap-1">
                <span class="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                <span class="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                <span class="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                <span class="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                <span class="h-8 w-0.5 rounded-full bg-indigo-500"></span>
              </div>
            </div>

            <div>
              <strong class="rounded btn btn-sm border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                DOWNLOAD PDF
              </strong>

              <h3 class=" text-lg font-medium sm:text-xl ">
                <a href="" class="hover:underline">
                  {" "}
                  {q.question}{" "}
                </a>
              </h3>

              <p class="mt-1 text-sm text-gray-700">{q.ans}</p>

              <div class="mt-4 sm:flex sm:items-center sm:gap-2">
                <div class="flex items-center gap-1 text-gray-500">
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>

                  <p class="text-xs font-medium">48:32 minutes</p>
                </div>

                <span class="hidden sm:block" aria-hidden="true">
                  &middot;
                </span>

                <p class="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                  Featuring{" "}
                  <a href="#" class="underline hover:text-gray-700">
                    Barry
                  </a>
                  ,
                  <a href="#" class="underline hover:text-gray-700">
                    Sandra
                  </a>{" "}
                  and
                  <a href="#" class="underline hover:text-gray-700">
                    August
                  </a>
                </p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Blog;
