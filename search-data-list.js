// UL Variable
const ul = document.getElementById("myUL");

// List: 1
const list1 = document.createElement("li");
const a1 = document.createElement("a");

list1.id = "list1";
a1.href = "https://abirett3.github.io/my-blogs/blogs/password%20validation%20in%20javascript.html";
a1.textContent = "Password validation in javascript";

list1.append(a1);
ul.append(list1);

// List: 2
const list2 = document.createElement("li");
const a2 = document.createElement("a");

list2.id = "list2";
a2.href = "https://abirett3.github.io/my-blogs/blogs/url-obfuscation-with-decimal-ip-address.html";
a2.textContent = "Investigation URL Obfuscation With Decimal IP Address";

list1.append(a2);
ul.append(list2);