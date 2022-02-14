
## Network Notes

Created: 11.02.2022

RPC
---

**Remote Procedure Call** (RPC, aka function call or a subroutine call) is a software communication protocol that one program can use
to request a service from a program located in another computer on a network without having to understand the network's details.

**RPC** uses the **client-server** model. The requesting program is a **client**, and the service-providing program is the **server**.
Like a local procedure call, an RPC is a synchronous operation requiring the requesting program to be suspended until the results
of the remote procedure are returned. However, the use of lightweight processes or threads that share the same address space enables
multiple RPCs to be performed concurrently.

IDL
---

An **interface description language** or **interface definition language** (IDL), is a generic term for a language that lets a program
or object written in one language communicate with another program written in an unknown language. **IDLs** describe an interface in a
language-independent way, enabling communication between software components that do not share one language, for example,
between those written in C++ and those written in Java.

**IDLs** are commonly used in **remote procedure call** software. In these cases the machines at either end of the link may be using different
operating systems and computer languages. **IDLs** offer a bridge between the two different systems.
