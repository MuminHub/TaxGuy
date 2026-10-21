import test from 'node:test';
import assert from 'node:assert/strict';
import {win32,posix} from 'node:path';
for(const platform of [win32,posix]){
 test(`static asset boundary uses ${platform.sep} on its platform`,()=>{
 const root=platform.resolve('project','public');
 const allowed=p=>p===root||p.startsWith(root+platform.sep);
 for(const asset of ['style.css','app.js','policy.js'])assert.equal(allowed(platform.resolve(root,asset)),true);
 assert.equal(allowed(platform.resolve(root,'../server.js')),false);
 assert.equal(allowed(root+'-other'+platform.sep+'private'),false);
 });
}
