# node-red-contrib-mtconnect

A Node-RED package for MTconnect integration.

For some time now, when working with MTconnect, I have noticed using 'Ladder99' was not ideal for the task I was undertaking. I created this node package as an alternative to integrate MTconnect into Node-RED.

To allow maximum flexibility, the nodes were designed to allow the user to manually select the data they desire.

I have also provided an example flow for anyone who needs it. 

(These nodes are still in Beta, they are bound to have bugs, please report them on the github page)

## Acknowledgements

|                 |                          |
| -------------   |-------------             |
| Abhik Banerjee  | Swinburne University     |
| Ashish Manchanda | Swinburne University    |

Thank you to all that helped me develop these nodes!

## Nodes

### MTconnect Receive

Fetches an XML document, via a HTTP request, and outputs a JSON formatted payload.

### MTconnect Rules

Allows the user to add 'move' rules to the msg.payload, for extracting the desired information.
