%   Storing Associations with Matrix Models
%   by Anton Roupassov-Ruiz
%   Modified 2024.06.09
%   Based off of PSYCO 403 Computational Memory Models (Dr. Jeremy Caplan) Basic linear algebra, MATLAB, and memory models by Yang Liu, Chris Madan and Jeremy Caplan

% --------- General -----------
clc, clearvars % clears the shell and clears variables
% help function (tells us what a function does)
% --------- Vectors -----------
% 1D vectors in Matlab are defined from the origin to some point with
% coordinate x
x = 5
% We add vectors simply by adding their coordinates and to scale them we
% multiply by some scalar.
w = 10
x + w
w*5
% The length of a 1D vector is simply the absolute value of its coordinate
abs(w)
% when we create a row vector we use commas or spaces to separate values
vector1 = [1,1,1]
vector2 = [1 1 1]
% ----- Multidimensional Vectors ------
%for column vectors we use semicolons to separate values
vector3 = [1;1;1]
% the transpose of a vector
vector1'
% lets see what the length of our vector is currently
norm(vector1)
% normalizing the vector (its length is 1)
vector1 = vector1 ./ norm(vector1)
% now we can see that the length of the vector is 1
norm(vector1)
% we can also take the norm without the . before the / because this is
% simply scalar division, which also normalizes the vector
vector2 = [1,1,1]
vector2 = vector2 / norm(vector2)
norm(vector2)
% --------- Orthogonality ---------
% having orthogonal vectors helps because it minimizes interference and thus similarity between memory items which improves retrieval accuracy
% For some two dimensional vector A = [a;b] we can create an orthogonal vector B = [-b;a]
vectorA = [1;2]
vectorB = [-2;1]
% lets take their dot product to see if they're orthogonal (it should be 0)
dot(vectorA,vectorB)
% for a vector in greater than two dimensions we define some vector C = [a;b;c] and some vector D = [d;e;f] and we find an orthogonal vector E to C by subtracting the projection of D on C from C
vectorC = [1,2,3]
vectorD = [4,5,6]
projectionD_on_C = (dot(vectorC, vectorD) / dot(vectorC,vectorC))*vectorC
vectorE = vectorD - projectionD_on_C
% again, let's check if vectorE and vectorC are orthogonal by confirming
% that their dot product is 0
dot(vectorC, vectorE) % very small number that is approximately 0 due to floating point approximations
% ----- Matrix Memory Model Application ------
% Consider vectors f and g where they each represent the features of words.
% Each element is a different feature of the word (like its length or
% meaning). The values at each element represents the strength of each
% feature for each word.
f = [0.2, 0.4, 0.21]'
g = [0.42, 0.94, 0.23]'
% Now we normalize them for simplicity
f = f / norm(f)
g = g / norm(f)
norm(f)
norm(g)
dot(f,g) / ( norm(f) * norm(g) )
% the dot product is close to 1, indicating that the vectors are very
% similar. What should we do here? As mentioned before there would be
% high interference and retrieval accuracy would be go down.
% let's try now with some other vectors
a = [5;4]
b = [-4;5]
a = a / norm(a)
norm(a)
b = b / norm(b)
norm(b)
dot(a,b) / (norm(a) * norm(b))

% ----- Outer Product -----
% In Matlab we can compute the outer product of two normalized column vectors a and b with
M = a*b' % where the * performs matrix multiplication
% if a and b are associated and we have the association matrix M and either
% vector a or b then we can recall the other vector
a_retrieve = M*b
% we can also write:
a_retrieve = (a*b')*b % or
a_retrieve = a*(b'*b)% since matrix multiplication is associative!

b_retrieve = M*a % What do you notice about our returned b vector?
b_retrieve = (a*b')*b
b_retrieve = a*b'*b
c = [6;7] % let's add more associations
d = [-7;6]
M = M + c*d'
c_retrieve = M*b

dot(a,a_retrieve)/ (norm(a) * norm(a_retrieve))
% lets check the dot product of the vectors of our recalled a vector and our actual
% b vector.
dot(a,a_retrieve)/ (norm(a) * norm(a_retrieve))
% we get a result of 1 - these vectors are identical!
% now let's check b:
dot(b, b_retrieve) / (norm(b) * norm(b_retrieve))
fprintf('Error!\n');
% Notice how we properly recall a but not b. Recalling b resulted in a
% zero vector even though this isn't what b actually is... due to a and
% b being orthogonal.
% this model is unidirectional because we have to probe from the correct
% side! We get noise when probing from the wrong side.
% We can make the model work just as well in both directions with a slight
% modification!

M = a*b'+b*a' % we have modified our outer product matrix
b_retrieve = M*a
% again let's check the dot product of our recalled b vector and our
% actual a vector!
dot(b,b_retrieve)/(norm(b_retrieve)*norm(b)) % dot product is 1 - they are identical vectors!
% let's check the other side
a_retrieve = M*b
dot(a,a_retrieve)/(norm(a_retrieve)*norm(a)) % dot product of 1 - also identical vectors!
% This updated model is bidirectional - it can recall either item given the corresponding probe. Thus, we can actually store multiple 'associations', like c-d in the same
% association matrix!
% Let's show this with an example!
c = [6;7]
d = [-7;6]
c = c/norm(c)
d = d/norm(d)
M = M + c*d' + d*c'
c_retrieve = M*d
d_retrieve = M*c
dot(c,c_retrieve)/(norm(c_retrieve)*norm(c))
dot(d,d_retrieve)/(norm(d_retrieve)*norm(d))
% dot product is 1 for both c_retrieve and c
% as well as d_retrieve and d
% Anderson (1970) showed that we can add up item vectors and then find
% their dot product to estimate their recognition 'strength'
c_plus_d = c+d
dot(c_plus_d,c)/norm(c)
dot(c_plus_d,d)/norm(d)
% If we study a vector more than once:
c_plus_d = c_plus_d + d
dot(c_plus_d,d)/norm(d)
% The recognition strength increases!
% What if our vectors aren't orthogonal to each other? Until now they have
% been! In this example, we'll define two new vectors and ensure that they
% aren't orthogonal to one another:
e = [1;2]
f = e; f(end)=-e(end) % the semicolon suppresses the line of code.
% We are creating a new f vector and setting it equal to e. Then we are
% setting the element at the last index of the f vector to equal the 
% negation of the element at the last index of the e vector.
e = e/norm(e) % normalizing!
f = f/norm(f)
M = M + e*f' + f*e'
e_retrieve = M*f
f_retrieve = M*e
dot(e,e_retrieve) % alternate way to calculate dot product using the matlab function
dot(f,f_retrieve)
% the dot products are the same!
% Finally, we should also consider the situation where we have two item
% vectors that are very similar to each other.
g = [500;600]
h = [500;601]
g = g/norm(g)
h = h/norm(h)
M = M + g*h' + h*g'
g_retrieve = M*h
h_retrieve = M*g
dot(g,g_retrieve)
dot(h,h_retrieve) 
% their dot products are also the same!
