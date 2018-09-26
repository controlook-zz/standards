# REST API Guidelines

- We prefer REST-based APIs
- We prefer systems to be truly RESTful

## Resource Naming Guide

- RESTful URI should refer to a resource that is a thing (noun) instead of referring to an action (verb).
- Do not use trailing forward slash (/) in URIs.

```
http://api.controlook.com/users/
http://api.controlook.com/users /*This is much better version*/
```

- Use hyphens (-) instead of underscores ( _ ) to improve the readability of URIs.
- Use lowercase letters in URIs.
- Use the `Content-Type` header to determine how to process the body’s content. **Never use file extenstions.**
- HTTP request methods should be used to indicate which CRUD function is performed. **Never use CRUD function names in URIs.**

```
HTTP GET    http://api.controlook.com/users      /*Get all users*/
HTTP POST   http://api.controlook.com/users      /*Create a new User*/
HTTP GET    http://api.controlook.com/users/{id} /*Get user for given ID*/
HTTP PUT    http://api.controlook.com/users/{id} /*Update user for given ID*/
HTTP DELETE http://api.controlook.com/users/{id} /*Delete user for given ID*/

HTTP GET    http://api.controlook.com/users/{id}/accounts /*Get all accounts for given User ID*/
HTTP DELETE http://api.controlook.com/users/{id}/accounts/{id} /*Delete account of a user*/
```

- Use query component to filter URI collection.

```
http://api.controlook.com/users?active=true
```

## HTTP response status codes

The following are all the HTTP codes we use:

### 2xx (Success category)

- **200 Ok** The standard HTTP response representing success for GET, PUT or POST.

### 4xx (Client Error Category)

These status codes represent that the client has raised a faulty request.

- **400 Bad Request** indicates that the request by the client was not processed, as the server could not understand what the client is asking for.
- **401 Unauthorized** indicates that the client is not allowed to access resources, and should re-request with the required credentials.
- **403 Forbidden** indicates that the request is valid and the client is authenticated, but the client is not allowed access the page or resource for any reason. E.g sometimes the authorized client is not allowed to access the directory on the server.
- **404 Not Found** indicates that the requested resource is not available now.
- **422 Unprocessable Entity** indicates that the request was well-formed but was unable to be followed due to semantic errors.
- **429 Too Many Requests** indicates that the user has sent too many requests in a given amount of time ("rate limiting").

### 5xx (Server Error Category)

- **500 Internal Server Error** indicates that the request is valid, but the server is totally confused and the server is asked to serve some unexpected condition.
