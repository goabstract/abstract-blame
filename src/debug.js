const logger = (text) => {
  console.log(text);
}

logger.extend = () => logger;

const debug = () => logger;

export default debug;