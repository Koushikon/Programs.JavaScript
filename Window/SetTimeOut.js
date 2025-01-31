// This is let eaxmple with setTimeout
for (let i = 0; i < 3; i++)
{
    setTimeout(() => {
        console.log(i);
    }, 100);
}

/***
 * OUTPUT:
 * 0
 * 1
 * 2
 */

// This is var eaxmple with setTimeout
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);
}

/***
 * OUTPUT:
 * 3
 * 3
 * 3
 */