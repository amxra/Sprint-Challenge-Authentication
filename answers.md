
- [ ] What is the purpose of using sessions?
<answers/> Sessions help the server remember who needs to be given access to resources on the server. This is required because servers are 'stateless' and have virtually no 'memory' of which client/user interacts with it at which time. Sessions thus make it possible for a server to save some type of information about a client or user.
- [ ] What does bcrypt do to help us store passwords in a secure manner.
<answers/> bcrypt hashes passwords with a one-way hashing algorithm and an iteration count to strengthen the hashed result.
- [ ] What does bcrypt do to slow down attackers?
<answers/> Its hashing iteration count can be increased to further make it remain strong against brute-force search attacks - https://en.wikipedia.org/wiki/Bcrypt.
- [ ] What are the three parts of the JSON Web Token?
<answers/>
i. The header - contains the algorithm with the token type
ii. The payload - contains identifiable data relating to the resouce token was created for.
iii. The signature - is a base64 encoding of the header and payload with a secret sprinkled on it.
