FROM node

WORKDIR /app

COPY package.json .

RUN rm -rf node_modules
RUN npm i

COPY . .

EXPOSE 5173

# RUN export INFISICAL_TOKEN=$(infisical login --method=universal-auth --client-id=b2740662-88d3-49ff-a0f8-feb6b1f2d70e --client-secret=0a7fff7a6ba87f12f4996b949728621422958ba4c612bad1024c6cbf99a684ce --plain --silent)

# CMD ["infisical", "run", "--projectId", "84e617bf-726b-49f3-bb68-0710b7e480fc", "--", "npm", "run", "dev", "--" ,"--host"]
CMD ["npm", "run", "dev", "--" ,"--host"]

