## Questions

-   Add at least 3 Project features

    1. This project can dynamically show the name of the course, selected by the users. And an user can't set a course more than one time.
    2. Every course provide a value of credit in hour. And the total credit can not be more than 20. If user select a course that cross the total credit limit, a toast will be shown to alert the user.
    3. Also an user can see the total price of the course that is selected.

-   Discuss how you managed the state in your assignment project.

    Answer: I break the UI into 2 part. One called TOP and another MIDDLE. That is the core thinking when you develop UI using react. There is not footer. If there is a footer, i will add an another part in the UI called FOOTER part.

    Managing state is very important concept in React. Before think about state we have to think that where we actually want to add event trigger and where we want to make changes base on the event. It's also must needed to arrive the changes state information where we want to make change.

    I saw that, The select button is is the MIDDLE Part in my UI. In this part we have access both "courses card" and "cart" component. First i think to add state at the course card section. But react is know as One Direction Data Binding. For that reason if i declare state in the course card section, i can't pass the state change information to the cart section. For that reason i realize, i have to declare state in a position where i able to pass event handler to the event trigger button and also send the state change information to the cart section. App.jsx is the Common parent of Course card and cart section. So that i declare state to App.jsx section. And passing information of event handler and state change as props. Then i able to manage the state perfectly. Alhamdulillah.
