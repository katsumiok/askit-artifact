# Use an appropriate base image
FROM python:3.9

ENV ASKIT_MODEL gpt-4
ENV OPENAI_API_KEY sk-xxxxxxxxxxxxxxxxxxxxxxxx

# Install Python packages
RUN pip install --no-cache-dir pyaskit matplotlib pandas numpy

# Install Node.js
RUN apt-get update && apt-get install -y nodejs npm

# Install LaTeX (TeX Live) and dvipng
RUN apt-get install -y texlive-latex-base texlive-fonts-recommended texlive-fonts-extra texlive-latex-extra dvipng

# Install any additional dependencies (example: make, bash)
RUN apt-get install -y make bash

RUN pip install --no-cache-dir pyaskit matplotlib pandas jinja2   

WORKDIR /root/docker-artifact
ENTRYPOINT ["/bin/bash"]