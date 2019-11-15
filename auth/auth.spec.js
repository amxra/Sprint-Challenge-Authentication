const request = require("supertest");
// const auth = require('./auth-router');
// const db = require('../database/dbConfig')
// const bcrypt = require('bcryptjs')
const server = require('../api/server')

//tests for API endpoints

describe('POST /api/auth/register', () => {
    it('should return 201 status if successfully created', () => {
        return request(server).post('/api/auth/register')
            .send({
                username: "Tommy",
                password: "password"
            })
            .set('Content-Type', 'application/json')
            .then(res => {
                expect(res.status).toBe(201)
                expect(res.body.username).toBe('Tommy')
            })
    })
    it('both username and password should be provided', () => {
        return request(server).post('/api/auth/register')
            .send({
                username: "",
                password: ""
            })
            .set('Content-Type', 'application/json')
            .catch(err => {
                expect(res.status).toBe(500)
              
            })
    })
})

describe('POST /api/auth/login', () => {
    it('should return 200 status', () => {
        return request(server).post('/api/auth/login')
            .send({
                username: "Tommy",
                password: "password"
            })
            .set('Content-Type', 'application/json')
            .then(res => {
                expect(res.status).toBe(200)
            
            })
    })
    it('username and password should not be empty', () => {
        return request(server).post('/api/auth/login')
            .send({
                username: "",
                password: ""
            })
            .set('Content-Type', 'application/json')
            .catch(err => {
                expect(res.status).toBe(400)
              
            })
    })
})

