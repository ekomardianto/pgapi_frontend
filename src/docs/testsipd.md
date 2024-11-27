Testing SIPD RI BRK SYARIAH

1. Get Token
   1.a. Sukses Coce 290
   {
   "responseCode": "290",
   "responseMessage": "GET ACCESS TOKEN SUCCESS",
   "accessToken": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJXZlhub0Rod1FiZGJZUU90MjRzbkFCZ28zUHFfLWZJNS05YmNHb0J1RVFNIn0.eyJleHAiOjE3MTU2NjM3NjgsImlhdCI6MTcxNTY2MDE2OCwianRpIjoiM2M5OWZjMTAtZDZhOS00MGQwLWFjZDctNGIxOTE1NjE1NjdlIiwiaXNzIjoiaHR0cDovLzE3Mi4xMDAuMjAxLjcxOjkwOTAvYXV0aC9yZWFsbXMvU0lQRCIsInN1YiI6IjBjM2Y1MzI1LWVlMmUtNGUyMi1iYzNhLTMzNzY0OWEzOWI3MCIsInR5cCI6IkJlYXJlciIsImF6cCI6InNpcGQiLCJhY3IiOiIxIiwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiY2xpZW50SG9zdCI6IjE3Mi4xMDAuMjAxLjEwIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJjbGllbnRJZCI6InNpcGQiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtc2lwZCIsImNsaWVudEFkZHJlc3MiOiIxNzIuMTAwLjIwMS4xMCJ9.hYQ0_FAuN_Thk2b_Ow6XAOwmVVQH6LPod5te33g1BO71sQzz6fi5YsfBFomkA-GqeLqLbY5v0fCS7XhCe6L10RseGWmAeTke92ldnwU1wy5YR7_1k_vwplqKSDZjbI-L4J0oHVvFd_RbocrK0pKnIOvKXZYJi8dgpE34WwzutjV5gxB-qrAZe1d3CceORQrTv6tDK0yDCLQLuQmcNXXjDnzYqRU8x_ag87kdHyA0F6m8x2nSMu-8T_OaeUDpO0oEUBpPi6KZQKfWFW2Jwgu92PuSL3fJx4NKZAiYZIwTDhT8JmOAZLjk8iDC_jO20Xn_lqF-aQcG3PiBDMsDqDkKOQ",
   "tokenType": "Bearer",
   "expiresIn": "3600"
   }

   1.b. Access token not vailed code 297
   {"responseCode":"297","responseMessage":"GET ACCESS TOKEN FAILED. [Signature not valid]","accessToken":"","tokenType":"","expiresIn":""}

2. Inquiry Rekening
   2.a. Rekening BRKS
   {"partnerReferenceNo":"mkAWLun8I5C8IzmUxck3zATb5ojgqqsx","referenceNo":"76b75058-5948-4a37-8fc8-a4ffc720f8db","accountName":"ISMAIL","accountNo":"1012700895","additionalInfo":{"userId":"12345679237","bankCode":"119","kodeWilayah":"14","type":"rekening","detailVA":{"amount":"","desc":""}},"responseCode":"900","responseMessage":"Inquiry Success"} - {"X-TIMESTAMP":"2024-05-14T13:47:31+07:00"}
