# React Frequent Letters component

The App is a basic form that takes a string in.
 - The string is converted to a dictionary
 - The letters that are used the most are displayed to the user along with the number of times they are used.

 ### To install & run the app.
 1. yarn install
 2. yarn start

 ### Things to understand

 React state change is Asynchronous. Any time we call useState we initiate a change **but we dont wait for it to finish**.
 This means that if you chain state updates i.e.

 ```js
  const [formValue, setFormValue] = useState('first String');
  const [otherState, setOtherState] = useState('');

  const handleChange = (string) => {
    setFormValue(string);
    //We dont know if formValue will be updated yet! we might be referencing an old value :()
    setOtherState(formValue)
  }
```

We don't know if we will pass *_string_*  OR if we will still be referencing *_'first String'_*.

### Best Practice
When dealing with outside values i.e. useState values, Arrays, Objects, Strings... __Do not change them by accident.__

We can make sure of this by Copying __Any__ values we are dealing with inside of a function before making changes to it.

i.e.
 ```js
  const [formValue, setFormValue] = useState('first String');
  const [otherState, setOtherState] = useState('');

  const handleChange = (string) => {
    const newString = string
    setFormValue(newString);
    // we have a value inside the function that we are in control of and we know 100% the value of it.
    setOtherState(newString)
  }
```