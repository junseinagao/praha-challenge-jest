import * as jose from "jose";
import type { JWTPayload } from "jose";
import { AssertionError } from "assert";

const JWT_SECRET_KEY = new TextEncoder().encode(
  "-----BEGIN RSA PRIVATE KEY----- MIIEowIBAAKCAQEAuDv3RgenCiTNqOc7LaFVqAECf9/2vDhTfUBLQ57/DRWt2epO Fc67BMspPliEWWtTmqptdbMSN8vN3SdSO4WS5GaiottBS59Ypms3WxPBY7PnvTgW C5BisTBBz6UOaFRXpC2Xsc5WU4QBi2srA/TvvktRJTmPWZNhoB1P0WXm/OCtcwqh 4wxo1SCtiD7WHYVO0ZPMmeO2989BtmPhlFTu3/V4Cw6xtQ17HIjgihHNJuDn41K6 nOGcMBfUBos1jiRUF8TU4Mzq70jcnGG8gev3bODLEBGCwxElygj93sbDBovd9VRb 3P0Tptpc4Y7qRvTs5jiL1CaFbbe5DirOlyRzGwIDAQABAoIBAE+ZAPXNuprEWeK+ vK+zQ8nJXeYXwoeBoni7/YiiujlSA4HiHIiJf/3LNO+N2Oi1WTK6rX4rtxRKRpBl O78hr9xkh6HrLuPYXbnRGuKLv4MvKFF1WPj4EdvSKKzo+DeVMSRq2l5k8qE0qGIv FC+qdKZ37gAyRUADUCuYXnLvHwRj5HNE4gv/wYOC1UV/rl85xfEVcfUEJgEqRHVh +86tP1zwh4hovRZ+X+3Tsxop/T9oYqrplG+d5x4G+D5icV8147TjWs8GEBk+EhQi 8Tug6nhigX8ulOlPhKQVQlNiVv8ZUJCowdQAiaIT7xmGt9NWQQ45nOcxAIBFUjmm FHyJQLECgYEA+9t6J7SnKCMFSXmjloZNNILA36prYNk/I7zkJX2+g2Tf9hNKxjWc On3dKRkdoTGzJSPOnFg3/sCL5+y7ovKdFEvxUYby9IWwzMj2srAs+u/t6CqaES2b aplU1cXQgVBnFpxASt2lBCZiMO6vH4Mg3dns8oVHOz71Nd9KPoZ0CYMCgYEAu0O9 q8zTRQ9okWnZn9pEV8xLHj3daDwpRLgVEMnrDbtCT7Maun4i45Wo/J3CyQaj+Rd7 83BD0rmQzVJSIQbadvL97YbZsLGGGBsNCMPwWZvxKRg5DMaqvWiv+dZSm8jR4ixb pAbV9jecWkxrWRTDkr78y4rewAXAM9RKjQWUdIkCgYEA2aSuiUVp9htdZENDhL6G VUxw1Ff29viFwaJoHaXuTqmLiKDfSy3k1f8ScYOMwVGrl/q7fwwVR4ao4EEJXST/ bRy7a1KM/ZXSVQWNepkYJbnVA35dKV8aISJj12BccINEsptQS+IByfZJgDOjDj5I 1q6OPn3CMoaTbHyLMkEKYXUCgYAMsUi3zkg7lBHIWV5QwWCEeupUgGjzWbCKYde7 rZPq+FhEQqV7InWG62vqw16idXrDtV3HYEKYk89Gu1+psWc5TLr9UHiMy1uFYr/9 ahpuWG1+FZA4V3bXI7NZwbcTrAbdx5fmhDgYWiiUzj0waoHe/mbv/NegOEOQv8DV 0hz/0QKBgEiE3yqIu3sPjvMuTmdeUrzqoNKF4OBXyToC+hkIbwNc9mwDbkIAnVPT 0BUF+LQocNrA+ruahZF1yY5gJmBJ/RrFvT72BOtLTLWE4XiwhSkUQZ+cV2jDmIuS nUp8VB0tTWtCdeE5dgEi5GS70XhLklQoFqCf/IQWDBV9/3huRNmZ -----END RSA PRIVATE KEY-----"
);

type JWTPayloadHavingCustomClaims = {
  custom: {
    id: string;
  };
} & JWTPayload;

export type AssetsJWTPayloadHavingCustomClaims = (
  payload: JWTPayload
) => asserts payload is JWTPayloadHavingCustomClaims;

// TODO この関数のテストを書いてください。
export const AssetsJWTPayloadHavingCustomClaims: AssetsJWTPayloadHavingCustomClaims =
  (payload) => {
    if (!Object.values(payload).includes("custom"))
      throw new AssertionError({ message: "custom claims is not found" });
  };

/**
 * @param {String} jwt
 * @returns {Object} custom claims
 * @example```jwt
 * const claims = getCustomClaimsByJWT('eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiSnVuc2VpIE5hZ2FvIiwiY3VzdG9tIjp7ImlkIjoianVuc2VpbmFnYW8ifSwiaXNzIjoicHJhaGEtY2hhbGxlbmdlLWplc3QiLCJpYXQiOjE2NzI1Njc2OTksImV4cCI6MTY3MjU3NDg5OX0.Z1wbHBAt3LTaLcFTVflxx2tE3CZ02aIKdQFclzL2MHo')
 * console.log(claims) // => {id:"junseinagao"}
 * ```
 * TODO この関数のテストを書いてください。
 */
export const getCustomClaimsByJWT = (jwt: string) => {
  const claims = jose.decodeJwt(jwt);
  AssetsJWTPayloadHavingCustomClaims(claims);
  return claims;
};

// TODO この関数のテストを書いてください
export const signJWT = async (name: string, id: string) => {
  const jwt = await new jose.SignJWT({
    name,
    custom: { id },
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuer("praha-challenge-jest")
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(JWT_SECRET_KEY);
  return jwt;
};
