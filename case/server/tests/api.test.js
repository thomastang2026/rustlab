import test from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import {app} from '../src/app.js';
import {proposedSlots} from '../src/services/availability.js';

test('health endpoint uses the standard data envelope',async()=>{const response=await request(app).get('/api/health');assert.equal(response.status,200);assert.deepEqual(response.body,{data:{status:'ok'}})});
test('unknown routes use the standard error envelope',async()=>{const response=await request(app).get('/api/does-not-exist');assert.equal(response.status,404);assert.equal(response.body.error.code,'NOT_FOUND')});
test('availability creates duration-aware slots during open hours',()=>{const slots=proposedSlots('2030-01-01',60);assert.equal(slots[0].toISOString().slice(11,16),'09:00');assert.equal(slots.at(-1).toISOString().slice(11,16),'18:00')});
test('availability returns no slots on a closed Sunday',()=>{assert.deepEqual(proposedSlots('2030-01-06',60),[])});
