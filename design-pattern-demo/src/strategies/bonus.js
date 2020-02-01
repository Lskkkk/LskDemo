/**
 * 策略模式例子，发年终奖
 * 年终奖等级有'S', 'A', 'B', 'C'四种，
 * 分别对应的奖金策略为：
 * 'S'：三倍工资，并且额外+1w
 * 'A'：两倍工资，额外+5k
 * 'B'：一倍工资，+1k
 * 'C'：一倍工资，-2k
 * 根据每个员工工资乘以系数则为年终奖
 */

// 原实现
(() => {
    const calculate = (level, salary) => {
        let bonus = 0;
        if (level === 'S') {
            bonus = calculateS(salary);
        } else if (level === 'A') {
            bonus = calculateA(salary);
        } else if (level === 'B') {
            bonus = calculateB(salary);
        } else { // 如果有新的等级'D'，需要破坏这里的代码
            bonus = calculateC(salary);
        }
        return bonus;
    }
    // 实际情况的计算逻辑可能比这复杂很多，因此大部分情况下会提取计算逻辑为单独函数
    const calculateS = (salary) => salary * 3 + 10000;
    const calculateA = (salary) => salary * 2 + 5000;
    const calculateB = (salary) => salary * 1 + 1000;
    const calculateC = (salary) => salary * 1 - 2000;
    console.log(calculate('S', 1000));
    console.log(calculate('A', 2000));
})();


/**
 * 对origin.js中的例子采用策略模式优化，
 * 1. 实现一组策略类，采用相同的接口
 * 2. 通过上下文对象统一调用策略类，上下文对象中必须保持当前策略的实例
 * 它的最大的特点在于：可以支持在运行时改变部分算法。
 * 好处是：
 * 1. 减少if else
 * 2. 方便策略的增加减少，可维护性强
 */
(() => {
    class StrategyS {
        doCalculate(salary) {
            return salary * 3 + 10000;
        }
    }
    class StrategyA {
        doCalculate(salary) {
            return salary * 2 + 5000;
        }
    }
    class StrategyB {
        doCalculate(salary) {
            return salary * 1 + 1000;
        }
    }
    class StrategyC {
        doCalculate(salary) {
            return salary * 1 - 2000;
        }
    }
    class Context {
        constructor(strategy) {
            this.setStrategy(strategy);
        }
        setStrategy(strategy) {
            this.strategy = strategy;
        }
        doStrategy(salary) {
            return this.strategy.doCalculate(salary);
        }
    }

    /**
     * 策略模式在面向对象的场景下，该写的代码不会少；
     * 甚至直接从代码上看，不如直接调用具体的策略；
     * 但是直接调用具体的策略就会导致面向对象抽象意义不明；
     * 一般会用工厂模式去解决if else；
     */
    const calculate = (level, salary) => {
        let strategy = new StrategyC();
        if (level === 'S') {
            strategy = new StrategyS();
        } else if (level === 'A') {
            strategy = new StrategyA();
        } else if (level === 'B') {
            strategy = new StrategyB();
        }
        const context = new Context(strategy);
        return context.doStrategy(salary);
    }

    console.log(calculate('S', 1000));
    console.log(calculate('A', 2000));
})();



/**
 * 在JavaScript中，由于对象自变量的存在，这个场景下可以更好的实现;
 * 这种场景下，
 * 1. 策略组由Object实现；
 * 2. calculate直接充当Context对象。
 */
(() => {
    const strategy = {
        'S': (salary) => salary * 3 + 10000,
        'A': (salary) => salary * 2 + 5000,
        'B': (salary) => salary * 1 + 1000,
        'C': (salary) => salary * 1 - 2000
    };
    const calculate = (level, salary) => strategy[level](salary);

    console.log(calculate('S', 1000));
    console.log(calculate('A', 2000));
})();

/**
 * ps：
 * 1. 其实这个例子用来表示并不恰当，更多的是通过配置消灭了if else，并没有体现出策略模式；
 * 2. 策略模式其实不是为了消灭if else的，更多的是为了封装一组可替换的策略，降低耦合度；
 * 3. if else的消除更多的是通过工厂模式，配合策略模式即可达到优化代码的目的；
 */