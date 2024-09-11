import numpy as np

sample = np.array([[0, 0, 1, 1], [0, 1, 0, 1]])
Y = np.array([0, 0, 1, 1])

alpha = 0.01


def relu_derivative(x):
    return (x > 0) * 1


def main():
    # parameters initialization
    B1 = np.zeros((2, 1))
    W1 = np.random.rand(2, 2)
    B2 = 0
    W2 = np.random.rand(1, 2)

    for i in range(1000):
        # feed forward
        # Z1 means the first layer
        Z1 = np.dot(W1, sample) + B1
        # # sigmoid activation function
        # A1 = 1 / (1 + np.exp(-Z1))
        # ReLU activation function
        A1 = np.maximum(Z1, 0)

        Z2 = np.dot(W2, A1) + B2
        # sigmoid activation function
        A2 = 1 / (1 + np.exp(-Z2))

        # we use this specific loss function here, it fits this case
        # in addition, this is called binary cross entropy loss function
        LOSS = - 0.25 * (Y * np.log(A2) + (1 - Y) * np.log(1 - A2))
        # back propagation
        # batch gradient descent
        dA2 = -Y / A2 + (1 - Y) / (1 - A2)
        dZ2 = dA2 * A2 * (1 - A2)
        dB2 = dZ2
        dW2 = np.dot(dZ2, np.transpose(A1))

        dA1 = np.transpose(W2).dot(dZ2)
        dZ1 = dA1 * relu_derivative(A1)
        dB1 = dZ2
        dW1 = np.dot(dZ1, np.transpose(sample))

        W2 = W2 - alpha * dW2
        B2 = B2 - alpha * dB2

        W1 = W1 - alpha * dW1
        B1 = B1 - alpha * dB1
        print('Z1', Z1)
        print('Z2', Z2)
        print('A1', A1)
        print('A2(output)', A2)
        print('W1', W1)
        print('W2', W2)
        print('B1', B1)
        print('B2', B2)
        print('L(loss) ', LOSS)


if __name__ == '__main__':
    main()
