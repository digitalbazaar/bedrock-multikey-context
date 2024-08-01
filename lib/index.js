/*!
 * Copyright (c) 2022-2024 Digital Bazaar, Inc. All rights reserved.
 */
import * as multikeyContext from '@digitalbazaar/multikey-context';
import {jsonLdDocumentLoader} from '@bedrock/jsonld-document-loader';

jsonLdDocumentLoader.addDocuments({documents: multikeyContext.contexts});

export const {constants} = multikeyContext;
