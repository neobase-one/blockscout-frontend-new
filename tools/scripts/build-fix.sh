#!/bin/bash

# generate envs.js file and run the app
dotenv \
  -v NEXT_PUBLIC_GIT_COMMIT_SHA=1b10d15f \
  -v NEXT_PUBLIC_GIT_TAG=v1.25.0-alpha.2 \
  -e .env.secrets \
  -e .env.development.local \
  -e .env.local \
  -e .env.development \
  -e .env \
  -- bash -c './deploy/scripts/make_envs_script.sh && next build' |
pino-pretty
