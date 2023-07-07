# Location Widget 

I thought that the location feature is important for the plan application because while we are planning, maybe we can organize our plans according to our instant location.

## `Line 1`

In line 1, I imported two hooks from React: the “useState” hook and the “useEffect” hook.It stores the current value of the “state” variable and React only updates the part of the UI that depends on the state when it changes. This makes React efficient.

## `Line 3`

I immediately export our components.

## `Line 4-5`

the `useState` hook is used to add state management to functional components in React. The first element in the array (`location` and `loading`) represents the current state value, while the second element (`setLocation` and `setLoading`) is a function that allows you to update the state value.

## `Line 7-20`

this code sets up an effect that runs once when the component is mounted. It attempts to retrieve the user's location using the browser's `Geolocation API`. If successful, it fetches the location details based on the coordinates and updates the state accordingly. If there's an error in retrieving the location, it logs the error and updates the  `loading` state variable to `false`.

## `Line 22-40`

this part of code performs an asynchronous `HTTP` request to retrieve location details based on the provided latitude and longitude. `If the request is successful`, it extracts the necessary data, updates the location state variable, and sets `loading` to `false`. If any errors occur during the request or parsing of the response, appropriate error messages are logged, and loading is still set to false.

## `Line 42-50`

And finally this JSX code renders a `<div>` element with a CSS class name "location-widget". Inside the `<div>`, it conditionally renders either a "Loading..." message or the location information. If loading is true, the loading message is shown. If loading is false, it checks the value of `location` to determine whether to display the location information or a "Location not available" message.

# The last step is

import MyCustomWidget from '../widgets/MyCustomWidget'

WidgetGalleryModal.js updated

and...

in App.js MyCustomWidget `component` added.