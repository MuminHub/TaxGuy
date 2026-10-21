import test from 'node:test';import assert from 'node:assert/strict';import {containsContact} from '../public/policy.js';
test('blocks common contact details before payment',()=>{for(const x of ['me@example.com','me at example dot com','Call +1 (212) 555-0123','https://example.com','WhatsApp me','one two three four five six seven'])assert.equal(containsContact(x),true,x)});
test('allows normal tax conversation',()=>{for(const x of ['I need help with my 2025 tax return','Do you work with freelancers?','My budget is $250'])assert.equal(containsContact(x),false,x)});
