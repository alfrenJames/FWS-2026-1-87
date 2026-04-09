
function welcomeMessage(firstName)
 {
  const currentTime = (new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }));
  return "Good Morning" + firstName + "! time: " + currentTime;
}
 console.log (welcomeMessage(" Alice"))

