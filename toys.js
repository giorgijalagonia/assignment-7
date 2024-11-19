//async
async function makeToys() {
  console.log("toy making process");

  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (Math.random() > 0.1) {
    console.log("Toy made successfully");
    return 'Undefected';
  } else {
    console.log("Defective toy made");
    return 'Defected';
  }
}

async function sellToys(status) {
  console.log("toy selling process");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (status === 'Undefected') {
    if (Math.random() > 0.7) {
      console.log("Toy sold successfully");
      return 'Sold';
    } else {
      console.log("could not sell the toy");
      return 'Not Sold';
    }
  } else {
    throw new Error("defective toy");
  }
}

async function deliverToys(sellStatus) {
  console.log("toy delivering process");

  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (sellStatus === 'Sold') {
    console.log("Toy delivered successfully");
    return 'Delivered';
  } else {
    throw new Error("unsold toy");
  }
}

async function promisify() {
  try {
    const status = await makeToys();
    const sellStatus = await sellToys(status);
    const deliveryStatus = await deliverToys(sellStatus);
    console.log(deliveryStatus);
  } catch (error) {
    console.log(error.message);
  }
}

promisify();


//then/catch

function makeToys() {
  console.log("toy making process");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        console.log("Toy made successfully");
        resolve('Undefected');
      } else {
        console.log("defective toy");
        reject("defective toy");
      }
    }, 3000);
  });
}

function sellToys(status) {
  console.log("toy selling process");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === 'Undefected') {
        if (Math.random() > 0.7) {
          console.log("Toy sold successfully.");
          resolve('Sold');
        } else {
          console.log("Failed to sell");
          reject("Failed to sell");
        }
      } else {
        reject("defective toy");
      }
    }, 1000)
  });
}

function deliverToys(sellStatus) {
  console.log("Delivering the toy...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sellStatus === 'Sold') {
        console.log("Toy delivered successfully");
        resolve('Delivered');
      } else {
        reject("unsold toy");
      }
    }, 2000);
  });
}

makeToys()
  .then((status) => sellToys(status))
  .then((sellStatus) => deliverToys(sellStatus))
  .then((deliveryStatus) => console.log(deliveryStatus))
  .catch((error) => console.log(error));
