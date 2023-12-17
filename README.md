
# Network

Computer networking may be considered a branch of computer science, computer engineering, and telecommunications. Computer networking was influenced by a wide array of technology developments and historical milestones.

The development of computer networks has a complex and gradual history, evolving over several decades. Here's a simplified overview of how computer networks started:

- Early Communication Protocols (1950s-1960s): The concept of computer networking began with early mainframe computers in the 1950s and 1960s. At this stage, computers were isolated and communication was limited.

- Packet Switching (late 1960s): The idea of packet switching, a method for transmitting electronic data, was introduced. In 1969, the first successful message was sent over the ARPANET (Advanced Research Projects Agency Network), which was the precursor to the modern internet. The ARPANET used packet switching to allow multiple computers to communicate on a single network.

- TCP/IP Protocols (1970s): The development of the Transmission Control Protocol (TCP) and the Internet Protocol (IP) in the 1970s played a crucial role in the expansion of computer networks. TCP/IP became the standard for data transmission, ensuring information exchange between diverse computer systems.

- Ethernet (1970s-1980s): The invention of Ethernet by Robert Metcalfe and his colleagues at Xerox PARC in the 1970s was a significant milestone. Ethernet became a widely adopted local area network (LAN) technology, enabling computers within the same physical proximity to communicate with each other.

- Commercialization and Expansion (1980s): Computer networks transitioned from academic and research institutions to commercial use. Companies started developing and implementing proprietary networking solutions, and the term "Local Area Network" became more commonplace.

- World Wide Web (1990s): The invention of the WWW by Tim Berners-Lee in 1989 and its subsequent development in the 1990s significantly accelerated the growth of the internet. The web made information more accessible and user-friendly, leading to a surge (ripple, wave, rise) in internet usage.

- Broadband and High-Speed Internet (2000s): Widespread adoption of broadband internet, providing high-speed connectivity to homes and businesses. This facilitated the growth of online services, multimedia content, and a more interactive internet experience.

- Wireless Networks (2000s-2010s): Spread of wireless technologies, such as Wi-Fi, allowed for greater mobility and flexibility in network connectivity. Mobile networks also became integral to internet access, with the advent of smartphones and other mobile devices.

- Cloud Computing (2010s-present): Cloud computing has further transformed computer networking. Services like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform offer scalable and flexible computing resources over the internet, changing the way organizations approach network infrastructure.

The evolution of computer networks continues, with ongoing advancements in technologies such as 5G and the Internet of Things (IoT).

The modern internet is a complex system that relies on a variety of technologies and protocols to enable communication and data exchange between devices worldwide. Here's a simplified overview of how the modern internet works:

1. Devices and Endpoints:

- Client Devices: These are the devices used by end-users, such as computers, smartphones, tablets, and IoT devices.
- Servers: These are powerful computers that store and deliver content or services. Servers can host websites, applications, and other resources.

2. Internet Service Providers (ISPs):

- ISPs provide internet access to users. They connect users to the global internet infrastructure through wired or wireless networks.
ISPs use various technologies, including fiber optics, cable, DSL, and wireless connections, to transmit data between users and the broader internet.

3. Protocols:

- TCP/IP (Transmission Control Protocol/Internet Protocol): The fundamental suite of protocols that enables communication on the internet. It breaks down data into packets for transmission and ensures reliable delivery.
- DNS (Domain Name System): Converts human-readable domain names (like www.example.com) into IP addresses that machines use to identify each other on the network.
HTTP/HTTPS (Hypertext Transfer Protocol/Secure): Defines how web browsers and servers communicate. HTTPS adds a layer of security through encryption.

4. Data Transmission:

- Data Packets: Information is divided into small packets for efficient transmission. Each packet includes the destination address, source address, and a portion of the data.
- Routing: Routers direct data packets along the most efficient paths through the network to reach their destination. The internet is a vast network of interconnected routers.

5. Internet Backbone:

- The internet backbone consists of high-capacity, long-distance data transmission links provided by major telecommunication companies. These links connect different regions and continents.

6. Peering Points:

- At peering points, different networks and ISPs connect to exchange traffic directly. Internet Exchange Points (IXPs) facilitate these connections, improving the efficiency of data exchange.

7. Content Delivery Networks (CDNs):

- CDNs distribute content across multiple servers globally, reducing latency and improving the speed of content delivery. This is crucial for delivering web pages, videos, and other digital content.

8. Security Measures:

- Firewalls and Security Protocols: Protect networks from unauthorized access and cyber threats.
- SSL/TLS Encryption: Secures data transmitted over the internet, ensuring privacy and integrity.

9. Cloud Computing:

- Cloud services allow organizations and individuals to access computing resources, storage, and applications over the internet. This has transformed how computing power is delivered and utilized.

10. IPv6 Adoption:

- IPv6 has been introduced to address the limitation of IPv4 addresses, allowing for a more extensive range of unique IP addresses to accommodate the growing number of devices connected to the internet.

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
