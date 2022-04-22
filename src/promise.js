const p = new Promise((resolve, rejectReason) => {
  setTimeout(() => {
    resolve(1);
    rejectReason(new Error("message"));
  }, 2000);
});
p.then((result) => console.log("Result", result)).catch((err) =>
  console.log("Error", err.message)
);
