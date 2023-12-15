
# Network

Computer networking may be considered a branch of computer science, computer engineering, and telecommunications since it relies on the theoretical and practical application of the related disciplines.

The development of computer networks has a complex and gradual history, evolving over several decades. Here's a simplified overview of how computer networks started:

- Early Communication Protocols (1950s-1960s): The concept of computer networking began with early mainframe computers in the 1950s and 1960s. At this stage, computers were isolated, and communication between them was limited.

- Packet Switching (late 1960s): The idea of packet switching, a method for effectively transmitting electronic data, was introduced. In 1969, the first successful message was sent over the ARPANET (Advanced Research Projects Agency Network), which was the precursor to the modern internet. The ARPANET used packet switching to allow multiple computers to communicate on a single network.

- TCP/IP Protocols (1970s): The development of the Transmission Control Protocol (TCP) and the Internet Protocol (IP) in the 1970s played a crucial role in the expansion of computer networks. TCP/IP became the standard for data transmission, ensuring the reliable and seamless exchange of information between diverse computer systems.

- Ethernet (1970s-1980s): The invention of Ethernet by Robert Metcalfe and his colleagues at Xerox PARC in the 1970s was a significant milestone. Ethernet became a widely adopted local area network (LAN) technology, enabling computers within the same physical proximity to communicate with each other.

- Commercialization and Expansion (1980s): In the 1980s, computer networks transitioned from academic and research institutions to commercial use. Companies started developing and implementing proprietary networking solutions, and the term "Local Area Network" became more commonplace.

- World Wide Web (1990s): The invention of the World Wide Web by Tim Berners-Lee in 1989 and its subsequent development in the 1990s significantly accelerated the growth of the internet. The web made information more accessible and user-friendly, leading to a surge in internet usage.

- Broadband and High-Speed Internet (2000s): The 2000s saw the widespread adoption of broadband internet, providing high-speed connectivity to homes and businesses. This facilitated the growth of online services, multimedia content, and a more interactive internet experience.

- Wireless Networks (2000s-2010s): The proliferation of wireless technologies, such as Wi-Fi, allowed for greater mobility and flexibility in network connectivity. Mobile networks also became integral to internet access, with the advent of smartphones and other mobile devices.

- Cloud Computing (2010s-present): Cloud computing has further transformed the landscape of computer networking. Services like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform offer scalable and flexible computing resources over the internet, changing the way organizations approach network infrastructure.

The evolution of computer networks continues, with ongoing advancements in technologies such as 5G, the Internet of Things (IoT), and edge computing shaping the future of interconnected systems.

[More on Wikipedia](https://en.wikipedia.org/wiki/Computer_network) or ask AI.

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
