export const BUSINESS = {
  "businessType": "NOT_SET",
  "businessAddress": {
      "line1": "tarasov198726+20@gmail.com",
      "line2": "",
      "city": "Jungle st. 26",
      "country": "US",
      "zipCode": "876345",
      "stateCode": "NE"
  },
  "feeResponsibility": 2,
  "creditCardFee": 0,
  "clients": [
      {
          "id": "63a3e2c7-fc6a-470b-8f7a-10c99ebfe5a0",
          "email": "grigory+20@maroo.us",
          "first_name": "new",
          "last_name": "client",
          "phone_number": "+16102347298",
          "is_active": true
      },
      {
          "id": "3f98e936-1292-416c-9d4a-8f36d37d6669",
          "email": "grigory+23@maroo.us",
          "first_name": "Dinamit",
          "last_name": "Artist",
          "phone_number": null,
          "is_active": false
      },
      {
          "id": "1e61015e-b8b0-4fc7-88f1-7e530087fcd4",
          "email": "grigory+21@maroo.us",
          "first_name": "grigory",
          "last_name": "21",
          "phone_number": "+16102458023",
          "is_active": true
      },
      {
          "id": "9be78c72-c925-498d-bdb5-4c6fba3ed390",
          "email": "grigory+22@maroo.us",
          "first_name": "Gringo",
          "last_name": "22",
          "phone_number": "+15852826438",
          "is_active": true
      }
  ],
  "contracts": [],
  "invoices": [],
  "paymentRequests": [
      {
          "id": "f68cc503-e86a-44ae-8562-da1aeecda6ba",
          "note": "note for client",
          "clientId": "63a3e2c7-fc6a-470b-8f7a-10c99ebfe5a0",
          "businessId": "ed5ac831-aa97-44fc-b245-0de048a14156",
          "shortCode": "gk3giTSP",
          "transactionId": "61",
          "paymentMethods": 3,
          "payments": [
              {
                  "id": "3d41ecf7-9203-4bf1-84c5-6e372ff77325",
                  "amount": 4800,
                  "currency": "USD",
                  "date": "2022-06-11T21:00:00.000Z",
                  "status": "complete"
              },
              {
                  "id": "698f3b02-d598-49bb-8d0e-1714b3831810",
                  "amount": 7200,
                  "currency": "USD",
                  "date": "2022-07-11T21:00:00.000Z",
                  "status": "created"
              }
          ],
          "totalAmount": 12000,
          "nextPayment": {
              "id": "698f3b02-d598-49bb-8d0e-1714b3831810",
              "amount": 7200,
              "currency": "USD",
              "date": "2022-07-11T21:00:00.000Z",
              "status": "created"
          }
      },
      {
          "id": "76d2daff-1f20-47b6-827f-404d30ab57b1",
          "note": "Note for client",
          "clientId": "1e61015e-b8b0-4fc7-88f1-7e530087fcd4",
          "businessId": "ed5ac831-aa97-44fc-b245-0de048a14156",
          "shortCode": "380HRQnD",
          "transactionId": "62",
          "paymentMethods": 3,
          "payments": [
              {
                  "id": "f6f0e214-8c92-44c7-9174-0fab09ee59fd",
                  "amount": 7500,
                  "currency": "USD",
                  "date": "2022-05-21T21:00:00.000Z",
                  "status": "complete"
              },
              {
                  "id": "2afd24fe-aa6e-4109-baad-a1036ab8063b",
                  "amount": 17500,
                  "currency": "USD",
                  "date": "2022-06-21T21:00:00.000Z",
                  "status": "created"
              }
          ],
          "totalAmount": 25000,
          "nextPayment": {
              "id": "2afd24fe-aa6e-4109-baad-a1036ab8063b",
              "amount": 17500,
              "currency": "USD",
              "date": "2022-06-21T21:00:00.000Z",
              "status": "created"
          }
      },
      {
          "id": "821af024-8edb-4d56-8974-3f4d142b7531",
          "note": "Pay me please 250",
          "clientId": "1e61015e-b8b0-4fc7-88f1-7e530087fcd4",
          "businessId": "ed5ac831-aa97-44fc-b245-0de048a14156",
          "shortCode": "zPcgQAmr",
          "transactionId": "63",
          "paymentMethods": 7,
          "payments": [
              {
                  "id": "d20cd5c2-2509-4bb4-af2c-d4ae847323c3",
                  "amount": 17500,
                  "currency": "USD",
                  "date": "2022-05-21T21:00:00.000Z",
                  "status": "complete"
              },
              {
                  "id": "c14910cf-7cf0-4f59-a5ca-17302d587b9c",
                  "amount": 7500,
                  "currency": "USD",
                  "date": "2022-07-21T21:00:00.000Z",
                  "status": "created"
              }
          ],
          "totalAmount": 25000,
          "nextPayment": {
              "id": "c14910cf-7cf0-4f59-a5ca-17302d587b9c",
              "amount": 7500,
              "currency": "USD",
              "date": "2022-07-21T21:00:00.000Z",
              "status": "created"
          }
      },
      {
          "id": "c1da5412-3b16-4148-b139-3725cb04521b",
          "note": "note for customer",
          "clientId": "1e61015e-b8b0-4fc7-88f1-7e530087fcd4",
          "businessId": "ed5ac831-aa97-44fc-b245-0de048a14156",
          "shortCode": "4aNrHvp3",
          "transactionId": "66",
          "paymentMethods": 3,
          "payments": [
              {
                  "id": "6af933e8-ff92-4218-879d-763aa463b222",
                  "amount": 2800,
                  "currency": "USD",
                  "date": "2022-05-15T21:00:00.000Z",
                  "status": "complete"
              },
              {
                  "id": "c6d18a73-08b9-4598-acb6-d7dbe9ffa519",
                  "amount": 4200,
                  "currency": "USD",
                  "date": "2022-07-21T21:00:00.000Z",
                  "status": "created"
              }
          ],
          "totalAmount": 7000,
          "nextPayment": {
              "id": "c6d18a73-08b9-4598-acb6-d7dbe9ffa519",
              "amount": 4200,
              "currency": "USD",
              "date": "2022-07-21T21:00:00.000Z",
              "status": "created"
          }
      },
      {
          "id": "4041ab52-5a6a-4c18-b481-4ff92d92d4e7",
          "note": "Hello! Pay me please",
          "clientId": "1e61015e-b8b0-4fc7-88f1-7e530087fcd4",
          "businessId": "ed5ac831-aa97-44fc-b245-0de048a14156",
          "shortCode": "zDpWFDyx",
          "transactionId": "67",
          "paymentMethods": 7,
          "payments": [
              {
                  "id": "5a4b33c4-f8b8-435d-af7d-eedb17055e6f",
                  "amount": 7800,
                  "currency": "USD",
                  "date": "2022-07-21T21:00:00.000Z",
                  "status": "complete"
              }
          ],
          "totalAmount": 7800
      },
      {
          "id": "e306dc10-38d2-46f0-b4d6-cd7bfb2c0edc",
          "note": "Some note",
          "clientId": "9be78c72-c925-498d-bdb5-4c6fba3ed390",
          "businessId": "ed5ac831-aa97-44fc-b245-0de048a14156",
          "shortCode": "Fzdy6QYF",
          "transactionId": "68",
          "paymentMethods": 7,
          "payments": [
              {
                  "id": "74209d83-8485-4bb5-a4df-67942019e75e",
                  "amount": 9000,
                  "currency": "USD",
                  "date": "2022-05-21T21:00:00.000Z",
                  "status": "complete"
              },
              {
                  "id": "381ff3f7-ba7e-43a8-9a4c-6f229f414524",
                  "amount": 18000,
                  "currency": "USD",
                  "date": "2022-06-21T21:00:00.000Z",
                  "status": "complete"
              },
              {
                  "id": "7abbe351-eaf0-40e4-be52-0bd7e5d5635a",
                  "amount": 18000,
                  "currency": "USD",
                  "date": "2022-07-21T21:00:00.000Z",
                  "status": "complete"
              }
          ],
          "totalAmount": 45000
      },
      {
          "id": "558943e5-dcf9-49d8-91fd-217cbda5416b",
          "note": "Message",
          "clientId": "1e61015e-b8b0-4fc7-88f1-7e530087fcd4",
          "businessId": "ed5ac831-aa97-44fc-b245-0de048a14156",
          "shortCode": "CgzcW9T1",
          "transactionId": "73",
          "paymentMethods": 7,
          "payments": [
              {
                  "id": "5f363d29-cc33-42ed-8c23-0068ae6ac8d5",
                  "amount": 3600,
                  "currency": "USD",
                  "date": "2022-05-04T21:00:00.000Z",
                  "status": "created"
              }
          ],
          "totalAmount": 3600,
          "nextPayment": {
              "id": "5f363d29-cc33-42ed-8c23-0068ae6ac8d5",
              "amount": 3600,
              "currency": "USD",
              "date": "2022-05-04T21:00:00.000Z",
              "status": "created"
          }
      },
      {
          "id": "ed6605cc-89f9-496e-82aa-1e689de3ffd6",
          "note": "Note",
          "clientId": "1e61015e-b8b0-4fc7-88f1-7e530087fcd4",
          "businessId": "ed5ac831-aa97-44fc-b245-0de048a14156",
          "shortCode": "jINLoBw7",
          "transactionId": "76",
          "paymentMethods": 3,
          "payments": [
              {
                  "id": "9a0c3680-4897-4967-896d-8bd929e2d0d8",
                  "amount": 6700,
                  "currency": "USD",
                  "date": "2022-05-05T21:00:00.000Z",
                  "status": "created"
              }
          ],
          "totalAmount": 6700,
          "nextPayment": {
              "id": "9a0c3680-4897-4967-896d-8bd929e2d0d8",
              "amount": 6700,
              "currency": "USD",
              "date": "2022-05-05T21:00:00.000Z",
              "status": "created"
          }
      },
      {
          "id": "abf02741-7209-4404-9560-52f952292431",
          "note": "g",
          "clientId": "1e61015e-b8b0-4fc7-88f1-7e530087fcd4",
          "businessId": "ed5ac831-aa97-44fc-b245-0de048a14156",
          "shortCode": "Nd6IL6so",
          "transactionId": "80",
          "paymentMethods": 1,
          "payments": [
              {
                  "id": "5711ab99-a6a7-4fd3-9ee1-26f64dd5a154",
                  "amount": 5500,
                  "currency": "USD",
                  "date": "2022-06-06T21:00:00.000Z",
                  "status": "created"
              }
          ],
          "totalAmount": 5500,
          "nextPayment": {
              "id": "5711ab99-a6a7-4fd3-9ee1-26f64dd5a154",
              "amount": 5500,
              "currency": "USD",
              "date": "2022-06-06T21:00:00.000Z",
              "status": "created"
          }
      },
      {
          "id": "5714d640-41a8-41c4-a533-f9fedf3676c0",
          "note": "Hello",
          "clientId": "9be78c72-c925-498d-bdb5-4c6fba3ed390",
          "businessId": "ed5ac831-aa97-44fc-b245-0de048a14156",
          "shortCode": "NeNvupmC",
          "transactionId": "77",
          "paymentMethods": 3,
          "payments": [
              {
                  "id": "5c65b95d-5554-46cf-80d1-6879f1383a33",
                  "amount": 4400,
                  "currency": "USD",
                  "date": "2022-04-04T21:00:00.000Z",
                  "status": "created"
              }
          ],
          "totalAmount": 4400,
          "nextPayment": {
              "id": "5c65b95d-5554-46cf-80d1-6879f1383a33",
              "amount": 4400,
              "currency": "USD",
              "date": "2022-04-04T21:00:00.000Z",
              "status": "created"
          }
      },
      {
          "id": "6929f8aa-f064-4e3c-9e99-f26a9a88cb14",
          "note": "I",
          "clientId": "1e61015e-b8b0-4fc7-88f1-7e530087fcd4",
          "businessId": "ed5ac831-aa97-44fc-b245-0de048a14156",
          "shortCode": "EZ5qctKS",
          "transactionId": "79",
          "paymentMethods": 1,
          "payments": [
              {
                  "id": "3ae40ac5-b0f4-453f-9d1c-6927ea781419",
                  "amount": 2300,
                  "currency": "USD",
                  "date": "2022-06-06T21:00:00.000Z",
                  "status": "created"
              }
          ],
          "totalAmount": 2300,
          "nextPayment": {
              "id": "3ae40ac5-b0f4-453f-9d1c-6927ea781419",
              "amount": 2300,
              "currency": "USD",
              "date": "2022-06-06T21:00:00.000Z",
              "status": "created"
          }
      },
      {
          "id": "eb849e58-dba7-4216-8793-86f04050a859",
          "note": "jag",
          "clientId": "1e61015e-b8b0-4fc7-88f1-7e530087fcd4",
          "businessId": "ed5ac831-aa97-44fc-b245-0de048a14156",
          "shortCode": "DSkGrqB8",
          "transactionId": "81",
          "paymentMethods": 1,
          "payments": [
              {
                  "id": "d7426a38-250c-4737-bfde-5052f24ad659",
                  "amount": 6600,
                  "currency": "USD",
                  "date": "2022-07-06T21:00:00.000Z",
                  "status": "created"
              }
          ],
          "totalAmount": 6600,
          "nextPayment": {
              "id": "d7426a38-250c-4737-bfde-5052f24ad659",
              "amount": 6600,
              "currency": "USD",
              "date": "2022-07-06T21:00:00.000Z",
              "status": "created"
          }
      },
      {
          "id": "c4a8df12-5984-4418-af55-e4552a424040",
          "note": "Just for now",
          "clientId": "3f98e936-1292-416c-9d4a-8f36d37d6669",
          "businessId": "ed5ac831-aa97-44fc-b245-0de048a14156",
          "shortCode": "3VkXyEyh",
          "transactionId": "74",
          "paymentMethods": 7,
          "payments": [
              {
                  "id": "9d839c29-34e0-4260-a414-b43711417175",
                  "amount": 4500,
                  "currency": "USD",
                  "date": "2022-04-04T21:00:00.000Z",
                  "status": "created"
              }
          ],
          "totalAmount": 4500,
          "nextPayment": {
              "id": "9d839c29-34e0-4260-a414-b43711417175",
              "amount": 4500,
              "currency": "USD",
              "date": "2022-04-04T21:00:00.000Z",
              "status": "created"
          }
      },
      {
          "id": "89ac3f93-fec8-40f4-ac5c-d08f40345570",
          "note": "dfdfg",
          "clientId": "1e61015e-b8b0-4fc7-88f1-7e530087fcd4",
          "businessId": "ed5ac831-aa97-44fc-b245-0de048a14156",
          "shortCode": "wP8EsWtm",
          "transactionId": "78",
          "paymentMethods": 6,
          "payments": [
              {
                  "id": "e0a9ea97-ac0a-4d2f-83ba-f22215e0adf2",
                  "amount": 4400,
                  "currency": "USD",
                  "date": "2022-05-05T21:00:00.000Z",
                  "status": "created"
              }
          ],
          "totalAmount": 4400,
          "nextPayment": {
              "id": "e0a9ea97-ac0a-4d2f-83ba-f22215e0adf2",
              "amount": 4400,
              "currency": "USD",
              "date": "2022-05-05T21:00:00.000Z",
              "status": "created"
          }
      },
      {
          "id": "e3719f39-e114-4558-9672-a5b593771012",
          "note": "Hey",
          "clientId": "3f98e936-1292-416c-9d4a-8f36d37d6669",
          "businessId": "ed5ac831-aa97-44fc-b245-0de048a14156",
          "shortCode": "orHxANVg",
          "transactionId": "75",
          "paymentMethods": 3,
          "payments": [
              {
                  "id": "66add1a6-01dd-4aad-b957-990ca6dd2b98",
                  "amount": 5600,
                  "currency": "USD",
                  "date": "2022-04-04T21:00:00.000Z",
                  "status": "created"
              }
          ],
          "totalAmount": 5600,
          "nextPayment": {
              "id": "66add1a6-01dd-4aad-b957-990ca6dd2b98",
              "amount": 5600,
              "currency": "USD",
              "date": "2022-04-04T21:00:00.000Z",
              "status": "created"
          }
      }
  ],
  "businessId": "ed5ac831-aa97-44fc-b245-0de048a14156",
  "businessName": "Scherkhan Totemov",
  "displayName": "cherkhan",
  "businessWebsite": "",
  "paymentLinkSlug": "cherkhan"
}