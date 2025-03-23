#!/usr/bin/env node
import { greetUser, runEvenGame } from '../src/cli.js';

const userName = greetUser();

runEvenGame(userName);
