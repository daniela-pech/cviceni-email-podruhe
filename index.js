const goodbye = (name) => {
  return 'S pozdravem ' + name;
};

const fillSubject = (subject) => {
  document.querySelector('.email__subject').textContent = subject;
};

const fillBody = (body, name, goodbyeFunction) => {
  const greetingElm = document.querySelector('.email__greeting');
  greetingElm.innerHTML = `Vážený pane ${name}`;
  const bodyElm = document.querySelector('.email__body');
  bodyElm.innerHTML = body;
  const closingElm = document.querySelector('.email__closing');
  closingElm.innerHTML = goodbyeFunction;
};

const formalGoodbye = (name) => {
  return 'S úctivou poklonou ' + name;
};

const rudeGoodbye = (name) => {
  return `Se měj ${name}`;
};

fillSubject('Nový mop');

fillSubject('Pozvánka na oslavu narozenin');
fillBody(
  'Zítra oslava. 18:00 ve Starý hospodě.',
  'Patrik Veselý',
  rudeGoodbye('Josef Veselý'),
);
