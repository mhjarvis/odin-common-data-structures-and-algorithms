## Linked Lists

Linked Lists function similar to arrays. The main benefit comes from the ability to easily insert/remove elements into the list without the need to reallocaate any other elements.

## Structure of a Linked List
A linked list is a linear collection of data elements called nodes that “point” to the next node by means of a pointer.

Each node holds a single element of data and a link or pointer to the next node in the list.

A head node is the first node in the list, a tail node is the last node in the list. Below is a basic representation of a linked list:

    [ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> null

## Breakdown of the linkedList.js file

There are two classes. LinkedList is the class that represents the entire linked list, and includes all the functions that act upon that list. ListNode is the class that creates the individual objects that hold the appropriate information of each node element.

    class ListNode              // holds each individual Node's data and the link to the next node
    class LinkedList            // represents the full list with all functions that act on that list

    isEmpty()                   // function checks if there are any nodes in the list
    prepend(data)               // fucntion that adds a value to the front of the list (making it root node)
    toString()                  // return a string of the linked list
    append(data)                // add value to the end of the linked list
    length()                    // return the size of the linked list
    head()                      // print the head element of the linked list
    tail()                      // print the last element of the linked list