### ANSWERS

1. You can use typeof( arg ) to find the type of an object (arg in this case). Technically there's not that many primitive data types in JS, there's : Strings, Numbers, Booleans, Objects, and Functions.

2. null != undefined (!). Null is a value used to indicate that it's intentionally left empty, whereas undefined is the value used when you haven't gotten around to assigning it a value yet. So null is empty, undefined is uninitiliazed.

3. Both compare two values (obviously) but A == B will convert A or B if necessary and return true if they convert to the same value. With A === B, there is no type conversion.
examples:
"1" == 1
=>true
"1" === 1
=>false

4. Event handlers are the functions that you attach to listen to DOM objects (I assume any object really (?) ), so when that object gets passed an event object it then passes that event to all the event handlers registered to listen for that event type.
Event bubbling seems like a boon and a bane. If some DOM element receives a click event it passes this event up the hierarchy. For instance :
<div id='a'>
 <div id='b'></div>
</div >
if I click on div b, it passes that event up to div a by default. You can prevent this using the stopPropagation() method. The preventDefault() method is used to prevent things from happening that happen by default. So if you have a button that submits data to a form and in your click event handler for the button you use preventDefault() then the button won't submit the form data.

5. So in asynchronous JS programming you still want to use return values you get from your functions but if you simply use a variable then later if you call that var you can get into trouble if the function hasn't finished yet, promises resolve this problem. Basically they're vars with 3 states: a successful state ( fulfilled ), a failure state ( rejected ), and a state for 'I've yet to decide' which is called pending (or maybe )
Construct a promise :
var am_I_awesome = new Promise( function(resolve, reject) {
  if (true) {
    resolve('Most Definitely');
  }else{
    reject('Perhaps Not');
  }
});
