async function makeToys() {
  if (Math.random() > 0.1) {
    return 'Undefected';
  } else {
    return 'Defected';
  }
}

async function sellToys(status) {
  if (status === 'Undefected') {
    if (Math.random() > 0.7) {
      return 'Toy has been sold';
    } else {
      return 'Toy was unsuccessful';
    }
  }
}

async function promisify() {
  try {
    const status = await makeToys();
    const result = await sellToys(status);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

promisify();
