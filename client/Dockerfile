FROM node:8.7.0-alpine

RUN mkdir -p /home/app/quiz-app/client/

WORKDIR /home/app/quiz-app/client/
ENV PATH /home/app/quiz-app/client/node_modules/.bin:$PATH

COPY . /home/app/quiz-app/client/

RUN npm install --silent
RUN npm install react-scripts -g --silent

CMD ["node","start"]
