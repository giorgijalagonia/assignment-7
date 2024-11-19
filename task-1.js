function delay(millisecond) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, millisecond);
  });
}

delay(3000).then(() => {
  console.log("3 seconds passed");
});
