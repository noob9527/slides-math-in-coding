
### 一元一次方程（初一下学期）

一般形式：

$$ y = ax + b \quad (a \neq 0) $$

- $a$ 决定直线的斜率（倾斜程度）
- $b$ 决定直线与 y 轴的交点

附：中学物理中的一元一次方程：
1. 欧姆定律（电压、电流和电阻的关系）：
   $$ V = IR $$

2. 重力与质量的关系：
   $$ F = mg $$

3. 弹簧弹力与拉长的长度的关系：
   $$ F = kx $$

以手机话费为例：

$$y = 0.1x + 20$$

其中，y 是月总话费（元），x 是通话分钟数
- a = 0.1（每分钟0.1元）
- b = 20（月租费20元）

通过这个方程，我们只需要知道自己一个月打了多少分钟电话，就能算出当月需要的话费。这也是传统编程的思路。清晰的描述出计算规则，需求方给定 a 和 b，用户输入 x，程序输出结果y。

### 线性回归
在实际生活中，我们往往先得到大量的实验数据，如：$[(x_1, y_1), (x_2, y_2), ..., (x_n, y_n)]$，并且这些数据点可能因为误差，不能“完美”的落在一条直线上，我们依然需要去寻找最能匹配这些数据的一元一次方程，从而理解这些数据的“规律”。换句话说，我们的目的从已知 a, b, x 求 y，变成了已知大量的样本 $(x_i, y_i)$， 求最合适的 a 和 b。

#### 微积分：最小二乘法（least square method）

$$D = [y_1-(ax_1+b)]^2 + [y_2-(ax_2+b)]^2 + ... + [y_n-(ax_n+b)]^2$$

- minimize  $D = \sum_{i=1}^{n}[y_i-(ax_i+b)]^2$
- find the point such that $\frac{\partial D}{\partial a} = \frac{\partial D}{\partial b}=0$

$\frac{\partial D}{\partial a}=\sum_{i=1}^{n}2(y_i-(ax_{i}+b))(-x_i)=\sum_{i=1}^{n}(x_{i}^{2}a+x_ib-x_iy_i)=0$

$\frac{\partial D}{\partial b}=\sum_{i=1}^{n}2(y_{i}-(ax_{i}+b))(-1)=\sum_{i=1}^{n}(x_ia+b-y_i)=0$

Solve this 2x2 linear equations, we can get the best line or the worst line, we need a second derivative test to determine.


### 机器学习
机器学习是一种让计算机能够从数据中“学习”的技术。简单来说，就是计算机通过大量的数据来找到规律，然后根据这些规律来做预测或决策，线性回归同时也是最基础的机器学习的例子，一般在机器学习类书籍的入门章节都会提到。

机器学习课程中有一个经典的梯度下降法，为了找到最合适的参数 a 和 b，可以
1. 先随机指定一个 $a_0$ 和 $b_0$，
2. 计算梯度：  
  $\frac{\partial D}{\partial a} = -2\sum_{i=1}^n x_i(y_i - (ax_i + b))$  
  $\frac{\partial D}{\partial b} = -2\sum_{i=1}^n (y_i - (ax_i + b))$
3. 更新参数：  
  $a_{new} = a - \alpha \frac{\partial D}{\partial a}$
  $b_{new} = b - \alpha \frac{\partial D}{\partial b}$
  其中 $\alpha$ 是学习率（超参数），决定每次更新的步长。
4. 重复步骤 2 和 3，直到 $|\frac{\partial D}{\partial a}|$ 和 $|\frac{\partial D}{\partial b}|$ 都小于某个阈值，或达到预设的迭代次数。
  
#### 梯度和梯度下降
Given $w = w(x,y,z)$
$$\frac{dw}{dt} = w_x\frac{dx}{dt} + w_y\frac{dy}{dt} + w_z\frac{dz}{dt} = \nabla w \cdot \frac{d\vec{r}}{dt}$$

Property 1: $\nabla w \perp$ level surface.

Proof: Given $w = w(x,y,z) = C$  
Given any vector $\vec{v}$ that tangents to the level surface.  
$\frac{dw}{dt} = 0 = \nabla w \cdot \vec{v} \implies \nabla w \perp \vec{v}$  
Hence, $\nabla w \perp$ tangent plane to the level c.

Property 2: $\nabla w$ always point towards higher value of $w$.

Example 1: $w = a_1x + a_2y + a_3z$  
$\nabla w = \langle w_x, w_y, w_z \rangle = \langle a_1, a_2, a_3 \rangle$  
The equation of the level surface is given by $a_1x + a_2y + a_3z = c$, which has normal vector $\langle a_1, a_2, a_3 \rangle$.

