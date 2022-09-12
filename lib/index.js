/*!
 * Copyright (c) 2022 Digital Bazaar, Inc. All rights reserved.
 */
import {jsonLdDocumentLoader} from '@bedrock/jsonld-document-loader';
import multikeyContext from '@digitalbazaar/multikey-context';

const contextModules = [
  multikeyContext
];

for(const {contexts} of contextModules) {
  for(const [contextUrl, context] of contexts) {
    jsonLdDocumentLoader.addStatic(contextUrl, context);
  }
}

const {constants} = multikeyContext;
export {constants};
