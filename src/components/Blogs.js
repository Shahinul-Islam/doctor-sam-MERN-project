import React from "react";

const Blogs = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 my-8">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Difference between SQL and NoSQL</h2>
          <p>
            SQL databases are primarily called as Relational Databases (RDBMS);
            whereas NoSQL database are primarily called as non-relational or
            distributed database.
          </p>
          <p>
            SQL databases defines and manipulates data based structured query
            language. A NoSQL database has dynamic schema for unstructured data.
          </p>
          <p>
            SQL databases are vertically scalable. NoSQL databases are
            horizontally scalable.
          </p>
          <p>
            SQL databases are table-based on the other hand NoSQL databases are
            either key-value pairs, document-based, graph databases or
            wide-column stores.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">What is JWT, and how does it work?</h2>
          <p>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties - a client and a server.
          </p>
          <p>
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted. A JWT is a string
            made up of three parts, separated by dots (.), and serialized using
            base64. In the most common serialization format, compact
            serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
            Once decoded, you will get two JSON strings: The header and the
            payload. The signature.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is the difference between javascript and NodeJS?
          </h2>
          <p>
            NodeJS is a cross-platform and open source Javascript runtime
            environment that allows the javascript to be run on the server-side.
            Nodejs allows Javascript code to run outside the browser. Nodejs
            comes with a lot of modules and mostly used in web development.
          </p>
          <p>
            Javascript is a Scripting language. It is mostly abbreviated as JS.
            It can be said that Javascript is the updated version of the ECMA
            script. Javascript is a high-level programming language that uses
            the concept of Oops but it is based on prototype inheritance.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            How does NodeJS handle multiple requests at the same time?
          </h2>
          <p>
            NodeJS Web Server maintains a limited Thread Pool to provide
            services to client requests. Multiple clients make multiple requests
            to the NodeJS server. NodeJS receives these requests and places them
            into the EventQueue . NodeJS server has an internal component
            referred to as the EventLoop which is an infinite loop that receives
            requests and processes them. This EventLoop is single threaded. In
            other words, EventLoop is the listener for the EventQueue. So, we
            have an event queue where the requests are being placed and we have
            an event loop listening to these requests in the event queue. What
            happens next? The listener(the event loop) processes the request and
            if it is able to process the request without needing any blocking IO
            operations, then the event loop would itself process the request and
            sends the response back to the client by itself. If the current
            request uses blocking IO operations, the event loop sees whether
            there are threads available in the thread pool, picks up one thread
            from the thread pool and assigns the particular request to the
            picked thread. That thread does the blocking IO operations and sends
            the response back to the event loop and once the response gets to
            the event loop, the event loop sends the response back to the
            client.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
