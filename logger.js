class Logger {
	constructor() {
			this.messages = new Map();
			this.maxSize = 100;
	}

	shouldPrintMessage(timestamp, message) {
			if (this.messages.has(message) && timestamp < this.messages.get(message)) {
					return false;
			}
			this.messages.set(message, timestamp + 10);
			if (this.messages.size > this.maxSize) {
					this.clean(timestamp);
			}
			return true;
	}

	clean(timestamp) {
			if (this.messages.size === 0) {
					return true;
			}
			for (let [message, time] of this.messages) {
					if (timestamp >= time) {
							this.messages.delete(message);
					}
			}
			return this.messages.size < this.maxSize;
	}

	loggerSize() {
			return this.messages.size;
	}
}

// Демонстрация работы
const logger = new Logger();

console.log(logger.shouldPrintMessage(1, "foo"));  // true
console.log(logger.shouldPrintMessage(2, "bar"));  // true
console.log(logger.shouldPrintMessage(3, "foo"));  // false
console.log(logger.shouldPrintMessage(8, "bar"));  // false
console.log(logger.shouldPrintMessage(10, "foo")); // false
console.log(logger.shouldPrintMessage(11, "foo")); // true
console.log(logger.loggerSize());                  // 2
console.log(logger.clean(11));                     // false
console.log(logger.clean(12));                     // true
