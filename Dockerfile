FROM cypress/included:6.6.0
RUN mkdir /e2e
WORKDIR /e2e
COPY . /e2e
ENTRYPOINT [ "npm", "run", "chrome:headless" ]