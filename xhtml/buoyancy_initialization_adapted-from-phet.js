window.phet = {};
window.phet.chipper = {};
window.phet.chipper.project = 'buoyancy';
window.phet.chipper.version = '1.0.0-dev.0';
window.phet.chipper.buildTimestamp = '2020-12-30 23:50:51 UTC';
window.phet.chipper.brand = 'adapted-from-phet';
window.phet.chipper.locale = 'en';

// This simulation uses following third-party resources.  The following code block describes each resource
// and provides its licensing information.  The START and END tags make it easy to automatically parse
// and the entries are in JSON.  See getLicenseEntry.js for information about the attributes in each entry.
// ### START THIRD PARTY LICENSE ENTRIES ###
window.phet.chipper.thirdPartyLicenseEntries = {
  "lib": {
    "base64-js-1.2.0.js": {
      "text": [
        "Copyright (c) 2014"
      ],
      "license": "The MIT License",
      "projectURL": "https://github.com/beatgammit/base64-js",
      "notes": "For converting typed arrays to base64 (helps converting encoded SVG data URLs)",
      "licenseText": [
        "The MIT License (MIT)",
        "",
        "Copyright (c) 2014",
        "",
        "Permission is hereby granted, free of charge, to any person obtaining a copy",
        "of this software and associated documentation files (the \"Software\"), to deal",
        "in the Software without restriction, including without limitation the rights",
        "to use, copy, modify, merge, publish, distribute, sublicense, and/or sell",
        "copies of the Software, and to permit persons to whom the Software is",
        "furnished to do so, subject to the following conditions:",
        "",
        "The above copyright notice and this permission notice shall be included in",
        "all copies or substantial portions of the Software.",
        "",
        "THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR",
        "IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,",
        "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE",
        "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER",
        "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,",
        "OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN",
        "THE SOFTWARE.",
        ""
      ]
    },
    "FileSaver-b8054a2.js": {
      "text": [
        "Copyright (c) 2015 Eli Grey. (http://eligrey.com)"
      ],
      "license": "The MIT License",
      "projectURL": "https://github.com/eligrey/FileSaver.js",
      "notes": "Used for saving screenshot images",
      "licenseText": [
        "Copyright © 2014 Eli Grey.",
        "",
        "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:",
        "",
        "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.",
        "",
        "THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",
        ""
      ]
    },
    "font-awesome-4.5.0": {
      "text": [
        "Created by Dave Gandy"
      ],
      "license": "Font Awesome licensed under SIL OFL 1.1 · Code licensed under MIT License · Documentation licensed under CC BY 3.0",
      "projectURL": "http://fontawesome.io/",
      "notes": "Provides shapes and icons for phet-io wrappers, SVG for icons in FontAwesomeNode",
      "licenseText": [
        "Copyright (c) 2013, Dave Gandy - http://fontawesome.io",
        "with Reserved Font Name Font Awesome.",
        "",
        "This Font Software is licensed under the SIL Open Font License, Version 1.1.",
        "This license is copied below, and is also available with a FAQ at:",
        "http://scripts.sil.org/OFL",
        "",
        "",
        "-----------------------------------------------------------",
        "SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007",
        "-----------------------------------------------------------",
        "",
        "PREAMBLE",
        "The goals of the Open Font License (OFL) are to stimulate worldwide",
        "development of collaborative font projects, to support the font creation",
        "efforts of academic and linguistic communities, and to provide a free and",
        "open framework in which fonts may be shared and improved in partnership",
        "with others.",
        "",
        "The OFL allows the licensed fonts to be used, studied, modified and",
        "redistributed freely as long as they are not sold by themselves. The",
        "fonts, including any derivative works, can be bundled, embedded,",
        "redistributed and/or sold with any software provided that any reserved",
        "names are not used by derivative works. The fonts and derivatives,",
        "however, cannot be released under any other type of license. The",
        "requirement for fonts to remain under this license does not apply",
        "to any document created using the fonts or their derivatives.",
        "",
        "DEFINITIONS",
        "\"Font Software\" refers to the set of files released by the Copyright",
        "Holder(s) under this license and clearly marked as such. This may",
        "include source files, build scripts and documentation.",
        "",
        "\"Reserved Font Name\" refers to any names specified as such after the",
        "copyright statement(s).",
        "",
        "\"Original Version\" refers to the collection of Font Software components as",
        "distributed by the Copyright Holder(s).",
        "",
        "\"Modified Version\" refers to any derivative made by adding to, deleting,",
        "or substituting -- in part or in whole -- any of the components of the",
        "Original Version, by changing formats or by porting the Font Software to a",
        "new environment.",
        "",
        "\"Author\" refers to any designer, engineer, programmer, technical",
        "writer or other person who contributed to the Font Software.",
        "",
        "PERMISSION & CONDITIONS",
        "Permission is hereby granted, free of charge, to any person obtaining",
        "a copy of the Font Software, to use, study, copy, merge, embed, modify,",
        "redistribute, and sell modified and unmodified copies of the Font",
        "Software, subject to the following conditions:",
        "",
        "1) Neither the Font Software nor any of its individual components,",
        "in Original or Modified Versions, may be sold by itself.",
        "",
        "2) Original or Modified Versions of the Font Software may be bundled,",
        "redistributed and/or sold with any software, provided that each copy",
        "contains the above copyright notice and this license. These can be",
        "included either as stand-alone text files, human-readable headers or",
        "in the appropriate machine-readable metadata fields within text or",
        "binary files as long as those fields can be easily viewed by the user.",
        "",
        "3) No Modified Version of the Font Software may use the Reserved Font",
        "Name(s) unless explicit written permission is granted by the corresponding",
        "Copyright Holder. This restriction only applies to the primary font name as",
        "presented to the users.",
        "",
        "4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font",
        "Software shall not be used to promote, endorse or advertise any",
        "Modified Version, except to acknowledge the contribution(s) of the",
        "Copyright Holder(s) and the Author(s) or with their explicit written",
        "permission.",
        "",
        "5) The Font Software, modified or unmodified, in part or in whole,",
        "must be distributed entirely under this license, and must not be",
        "distributed under any other license. The requirement for fonts to",
        "remain under this license does not apply to any document created",
        "using the Font Software.",
        "",
        "TERMINATION",
        "This license becomes null and void if any of the above conditions are",
        "not met.",
        "",
        "DISCLAIMER",
        "THE FONT SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,",
        "EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF",
        "MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT",
        "OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE",
        "COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,",
        "INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL",
        "DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING",
        "FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM",
        "OTHER DEALINGS IN THE FONT SOFTWARE.",
        ""
      ]
    },
    "he-1.1.1.js": {
      "text": [
        "Copyright Mathias Bynens <https://mathiasbynens.be/>"
      ],
      "license": "MIT",
      "projectURL": "https://github.com/mathiasbynens/he",
      "notes": "Used for HTML entity parsing in simulations related to RichText or other uses",
      "licenseText": [
        "Copyright Mathias Bynens <https://mathiasbynens.be/>",
        "",
        "Permission is hereby granted, free of charge, to any person obtaining",
        "a copy of this software and associated documentation files (the",
        "\"Software\"), to deal in the Software without restriction, including",
        "without limitation the rights to use, copy, modify, merge, publish,",
        "distribute, sublicense, and/or sell copies of the Software, and to",
        "permit persons to whom the Software is furnished to do so, subject to",
        "the following conditions:",
        "",
        "The above copyright notice and this permission notice shall be",
        "included in all copies or substantial portions of the Software.",
        "",
        "THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,",
        "EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF",
        "MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND",
        "NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE",
        "LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION",
        "OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION",
        "WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",
        ""
      ]
    },
    "himalaya-0.2.7.js": {
      "text": [
        "Copyright (c) 2015, Chris Andrejewski <christopher.andrejewski@gmail.com>"
      ],
      "license": "ISC License",
      "projectURL": "https://github.com/andrejewski/himalaya",
      "notes": "Used for HTML parsing in simulations, to sanitize/handle rich HTML text",
      "licenseText": [
        "Copyright (c) 2015, Chris Andrejewski <christopher.andrejewski@gmail.com>",
        "",
        "Permission to use, copy, modify, and/or distribute this software for any",
        "purpose with or without fee is hereby granted, provided that the above",
        "copyright notice and this permission notice appear in all copies.",
        "",
        "THE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES",
        "WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF",
        "MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR",
        "ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES",
        "WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN",
        "ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF",
        "OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.",
        ""
      ]
    },
    "jama-1.0.2": {
      "text": [
        "a basic linear algebra package for Java."
      ],
      "license": "Public Domain",
      "projectURL": "http://math.nist.gov/javanumerics/jama/",
      "notes": "A derived work (certain ported and modified files) is used in Dot, mainly for matrix decompositions. Used in assorted simulations.",
      "licenseText": [
        "Public Domain",
        "",
        "Copyright Notice This software is a cooperative product of The MathWorks and the National Institute of Standards and Technology (NIST) which has been released to the public domain. ",
        "Neither The MathWorks nor NIST assumes any responsibility whatsoever for its use by other parties, and makes no guarantees, expressed or implied, about its quality, reliability, or any other characteristic."
      ]
    },
    "jquery-2.1.0.js": {
      "text": [
        "Copyright (c) 2005, 2014 jQuery Foundation, Inc. and other contributors",
        "(includes Sizzle.js, http://sizzlejs.com)"
      ],
      "license": "The MIT License",
      "projectURL": "http://jquery.com",
      "notes": "Facilitates interaction with browser DOM elements, mainly used in Scenery",
      "licenseText": [
        "Copyright 2013 jQuery Foundation and other contributors",
        "http://jquery.com/",
        "",
        "Permission is hereby granted, free of charge, to any person obtaining",
        "a copy of this software and associated documentation files (the",
        "\"Software\"), to deal in the Software without restriction, including",
        "without limitation the rights to use, copy, modify, merge, publish,",
        "distribute, sublicense, and/or sell copies of the Software, and to",
        "permit persons to whom the Software is furnished to do so, subject to",
        "the following conditions:",
        "",
        "The above copyright notice and this permission notice shall be",
        "included in all copies or substantial portions of the Software.",
        "",
        "THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,",
        "EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF",
        "MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND",
        "NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE",
        "LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION",
        "OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION",
        "WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
      ]
    },
    "lodash-4.17.4.js": {
      "text": [
        "Lodash <https://lodash.com/>",
        "Copyright JS Foundation and other contributors <https://js.foundation/>",
        "Released under MIT license <https://lodash.com/license>",
        "Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>",
        "Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors"
      ],
      "license": "The MIT License",
      "projectURL": "http://lodash.com",
      "notes": "Adds common data structure operations such as sorting, grouping, etc.",
      "licenseText": [
        "Copyright JS Foundation and other contributors <https://js.foundation/>",
        "",
        "Based on Underscore.js, copyright Jeremy Ashkenas,",
        "DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>",
        "",
        "This software consists of voluntary contributions made by many",
        "individuals. For exact contribution history, see the revision history",
        "available at https://github.com/lodash/lodash",
        "",
        "The following license applies to all parts of this software except as",
        "documented below:",
        "",
        "====",
        "",
        "Permission is hereby granted, free of charge, to any person obtaining",
        "a copy of this software and associated documentation files (the",
        "\"Software\"), to deal in the Software without restriction, including",
        "without limitation the rights to use, copy, modify, merge, publish,",
        "distribute, sublicense, and/or sell copies of the Software, and to",
        "permit persons to whom the Software is furnished to do so, subject to",
        "the following conditions:",
        "",
        "The above copyright notice and this permission notice shall be",
        "included in all copies or substantial portions of the Software.",
        "",
        "THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,",
        "EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF",
        "MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND",
        "NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE",
        "LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION",
        "OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION",
        "WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",
        "",
        "====",
        "",
        "Copyright and related rights for sample code are waived via CC0. Sample",
        "code is defined as all source code displayed within the prose of the",
        "documentation.",
        "",
        "CC0: http://creativecommons.org/publicdomain/zero/1.0/",
        "",
        "====",
        "",
        "Files located in the node_modules and vendor directories are externally",
        "maintained libraries used by this software which have their own",
        "licenses; we recommend you read them, as their terms may differ from the",
        "terms above."
      ]
    },
    "pegjs-0.7.0.js": {
      "text": [
        "Copyright (c) 2010-2012 David Majda"
      ],
      "license": "The MIT License",
      "projectURL": "http://pegjs.majda.cz",
      "notes": "Parser Generator for JavaScript. SVG path parsing in Kite",
      "licenseText": [
        "Copyright (c) 2010-2012 David Majda",
        "",
        "Permission is hereby granted, free of charge, to any person",
        "obtaining a copy of this software and associated documentation",
        "files (the \"Software\"), to deal in the Software without",
        "restriction, including without limitation the rights to use,",
        "copy, modify, merge, publish, distribute, sublicense, and/or sell",
        "copies of the Software, and to permit persons to whom the",
        "Software is furnished to do so, subject to the following",
        "conditions:",
        "",
        "The above copyright notice and this permission notice shall be",
        "included in all copies or substantial portions of the Software.",
        "",
        "THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,",
        "EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES",
        "OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND",
        "NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT",
        "HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,",
        "WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING",
        "FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR",
        "OTHER DEALINGS IN THE SOFTWARE."
      ]
    },
    "seedrandom-2.4.2.js": {
      "text": [
        "Copyright 2015 David Bau."
      ],
      "license": "MIT",
      "projectURL": "https://github.com/davidbau/seedrandom",
      "notes": "seeded random number generator for Javascript",
      "licenseText": [
        "Copyright 2015 David Bau.",
        "",
        "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated",
        "documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the",
        "rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit",
        "persons to whom the Software is furnished to do so, subject to the following conditions:",
        "",
        "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the",
        "Software.",
        "",
        "THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE",
        "WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR",
        "COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR",
        "OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
      ]
    },
    "TextEncoderLite-3c9f6f0.js": {
      "text": [
        "AJ ONeal <awesome@coolaj86.com>"
      ],
      "license": "Apache 2.0",
      "projectURL": "https://github.com/coolaj86/TextEncoderLite",
      "notes": "Used for encoding unicode strings to typed arrays, for Scenery foreign object rasterization",
      "licenseText": [
        "",
        "                                 Apache License",
        "                           Version 2.0, January 2011",
        "                        http://www.apache.org/licenses/",
        "",
        "   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION",
        "",
        "   1. Definitions.",
        "",
        "      \"License\" shall mean the terms and conditions for use, reproduction,",
        "      and distribution as defined by Sections 1 through 9 of this document.",
        "",
        "      \"Licensor\" shall mean the copyright owner or entity authorized by",
        "      the copyright owner that is granting the License.",
        "",
        "      \"Legal Entity\" shall mean the union of the acting entity and all",
        "      other entities that control, are controlled by, or are under common",
        "      control with that entity. For the purposes of this definition,",
        "      \"control\" means (i) the power, direct or indirect, to cause the",
        "      direction or management of such entity, whether by contract or",
        "      otherwise, or (ii) ownership of fifty percent (50%) or more of the",
        "      outstanding shares, or (iii) beneficial ownership of such entity.",
        "",
        "      \"You\" (or \"Your\") shall mean an individual or Legal Entity",
        "      exercising permissions granted by this License.",
        "",
        "      \"Source\" form shall mean the preferred form for making modifications,",
        "      including but not limited to software source code, documentation",
        "      source, and configuration files.",
        "",
        "      \"Object\" form shall mean any form resulting from mechanical",
        "      transformation or translation of a Source form, including but",
        "      not limited to compiled object code, generated documentation,",
        "      and conversions to other media types.",
        "",
        "      \"Work\" shall mean the work of authorship, whether in Source or",
        "      Object form, made available under the License, as indicated by a",
        "      copyright notice that is included in or attached to the work",
        "      (an example is provided in the Appendix below).",
        "",
        "      \"Derivative Works\" shall mean any work, whether in Source or Object",
        "      form, that is based on (or derived from) the Work and for which the",
        "      editorial revisions, annotations, elaborations, or other modifications",
        "      represent, as a whole, an original work of authorship. For the purposes",
        "      of this License, Derivative Works shall not include works that remain",
        "      separable from, or merely link (or bind by name) to the interfaces of,",
        "      the Work and Derivative Works thereof.",
        "",
        "      \"Contribution\" shall mean any work of authorship, including",
        "      the original version of the Work and any modifications or additions",
        "      to that Work or Derivative Works thereof, that is intentionally",
        "      submitted to Licensor for inclusion in the Work by the copyright owner",
        "      or by an individual or Legal Entity authorized to submit on behalf of",
        "      the copyright owner. For the purposes of this definition, \"submitted\"",
        "      means any form of electronic, verbal, or written communication sent",
        "      to the Licensor or its representatives, including but not limited to",
        "      communication on electronic mailing lists, source code control systems,",
        "      and issue tracking systems that are managed by, or on behalf of, the",
        "      Licensor for the purpose of discussing and improving the Work, but",
        "      excluding communication that is conspicuously marked or otherwise",
        "      designated in writing by the copyright owner as \"Not a Contribution.\"",
        "",
        "      \"Contributor\" shall mean Licensor and any individual or Legal Entity",
        "      on behalf of whom a Contribution has been received by Licensor and",
        "      subsequently incorporated within the Work.",
        "",
        "   2. Grant of Copyright License. Subject to the terms and conditions of",
        "      this License, each Contributor hereby grants to You a perpetual,",
        "      worldwide, non-exclusive, no-charge, royalty-free, irrevocable",
        "      copyright license to reproduce, prepare Derivative Works of,",
        "      publicly display, publicly perform, sublicense, and distribute the",
        "      Work and such Derivative Works in Source or Object form.",
        "",
        "   3. Grant of Patent License. Subject to the terms and conditions of",
        "      this License, each Contributor hereby grants to You a perpetual,",
        "      worldwide, non-exclusive, no-charge, royalty-free, irrevocable",
        "      (except as stated in this section) patent license to make, have made,",
        "      use, offer to sell, sell, import, and otherwise transfer the Work,",
        "      where such license applies only to those patent claims licensable",
        "      by such Contributor that are necessarily infringed by their",
        "      Contribution(s) alone or by combination of their Contribution(s)",
        "      with the Work to which such Contribution(s) was submitted. If You",
        "      institute patent litigation against any entity (including a",
        "      cross-claim or counterclaim in a lawsuit) alleging that the Work",
        "      or a Contribution incorporated within the Work constitutes direct",
        "      or contributory patent infringement, then any patent licenses",
        "      granted to You under this License for that Work shall terminate",
        "      as of the date such litigation is filed.",
        "",
        "   4. Redistribution. You may reproduce and distribute copies of the",
        "      Work or Derivative Works thereof in any medium, with or without",
        "      modifications, and in Source or Object form, provided that You",
        "      meet the following conditions:",
        "",
        "      (a) You must give any other recipients of the Work or",
        "          Derivative Works a copy of this License; and",
        "",
        "      (b) You must cause any modified files to carry prominent notices",
        "          stating that You changed the files; and",
        "",
        "      (c) You must retain, in the Source form of any Derivative Works",
        "          that You distribute, all copyright, patent, trademark, and",
        "          attribution notices from the Source form of the Work,",
        "          excluding those notices that do not pertain to any part of",
        "          the Derivative Works; and",
        "",
        "      (d) If the Work includes a \"NOTICE\" text file as part of its",
        "          distribution, then any Derivative Works that You distribute must",
        "          include a readable copy of the attribution notices contained",
        "          within such NOTICE file, excluding those notices that do not",
        "          pertain to any part of the Derivative Works, in at least one",
        "          of the following places: within a NOTICE text file distributed",
        "          as part of the Derivative Works; within the Source form or",
        "          documentation, if provided along with the Derivative Works; or,",
        "          within a display generated by the Derivative Works, if and",
        "          wherever such third-party notices normally appear. The contents",
        "          of the NOTICE file are for informational purposes only and",
        "          do not modify the License. You may add Your own attribution",
        "          notices within Derivative Works that You distribute, alongside",
        "          or as an addendum to the NOTICE text from the Work, provided",
        "          that such additional attribution notices cannot be construed",
        "          as modifying the License.",
        "",
        "      You may add Your own copyright statement to Your modifications and",
        "      may provide additional or different license terms and conditions",
        "      for use, reproduction, or distribution of Your modifications, or",
        "      for any such Derivative Works as a whole, provided Your use,",
        "      reproduction, and distribution of the Work otherwise complies with",
        "      the conditions stated in this License.",
        "",
        "   5. Submission of Contributions. Unless You explicitly state otherwise,",
        "      any Contribution intentionally submitted for inclusion in the Work",
        "      by You to the Licensor shall be under the terms and conditions of",
        "      this License, without any additional terms or conditions.",
        "      Notwithstanding the above, nothing herein shall supersede or modify",
        "      the terms of any separate license agreement you may have executed",
        "      with Licensor regarding such Contributions.",
        "",
        "   6. Trademarks. This License does not grant permission to use the trade",
        "      names, trademarks, service marks, or product names of the Licensor,",
        "      except as required for reasonable and customary use in describing the",
        "      origin of the Work and reproducing the content of the NOTICE file.",
        "",
        "   7. Disclaimer of Warranty. Unless required by applicable law or",
        "      agreed to in writing, Licensor provides the Work (and each",
        "      Contributor provides its Contributions) on an \"AS IS\" BASIS,",
        "      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or",
        "      implied, including, without limitation, any warranties or conditions",
        "      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A",
        "      PARTICULAR PURPOSE. You are solely responsible for determining the",
        "      appropriateness of using or redistributing the Work and assume any",
        "      risks associated with Your exercise of permissions under this License.",
        "",
        "   8. Limitation of Liability. In no event and under no legal theory,",
        "      whether in tort (including negligence), contract, or otherwise,",
        "      unless required by applicable law (such as deliberate and grossly",
        "      negligent acts) or agreed to in writing, shall any Contributor be",
        "      liable to You for damages, including any direct, indirect, special,",
        "      incidental, or consequential damages of any character arising as a",
        "      result of this License or out of the use or inability to use the",
        "      Work (including but not limited to damages for loss of goodwill,",
        "      work stoppage, computer failure or malfunction, or any and all",
        "      other commercial damages or losses), even if such Contributor",
        "      has been advised of the possibility of such damages.",
        "",
        "   9. Accepting Warranty or Additional Liability. While redistributing",
        "      the Work or Derivative Works thereof, You may choose to offer,",
        "      and charge a fee for, acceptance of support, warranty, indemnity,",
        "      or other liability obligations and/or rights consistent with this",
        "      License. However, in accepting such obligations, You may act only",
        "      on Your own behalf and on Your sole responsibility, not on behalf",
        "      of any other Contributor, and only if You agree to indemnify,",
        "      defend, and hold each Contributor harmless for any liability",
        "      incurred by, or claims asserted against, such Contributor by reason",
        "      of your accepting any such warranty or additional liability.",
        "",
        "   END OF TERMS AND CONDITIONS",
        "",
        "   APPENDIX: How to apply the Apache License to your work.",
        "",
        "      To apply the Apache License to your work, attach the following",
        "      boilerplate notice, with the fields enclosed by brackets \"[]\"",
        "      replaced with your own identifying information. (Don't include",
        "      the brackets!)  The text should be enclosed in the appropriate",
        "      comment syntax for the file format. We also recommend that a",
        "      file or class name and description of purpose be included on the",
        "      same \"printed page\" as the copyright notice for easier",
        "      identification within third-party archives.",
        "",
        "   Copyright [yyyy] [name of copyright owner]",
        "",
        "   Licensed under the Apache License, Version 2.0 (the \"License\");",
        "   you may not use this file except in compliance with the License.",
        "   You may obtain a copy of the License at",
        "",
        "       http://www.apache.org/licenses/LICENSE-2.0",
        "",
        "   Unless required by applicable law or agreed to in writing, software",
        "   distributed under the License is distributed on an \"AS IS\" BASIS,",
        "   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.",
        "   See the License for the specific language governing permissions and",
        "   limitations under the License.",
        ""
      ]
    }
  }
};
// ### END THIRD PARTY LICENSE ENTRIES ###
window.phet.chipper.dependencies = {
  "comment": "# buoyancy 1.0.0-dev.0 Wed Dec 30 2020 15:50:53 GMT-0800 (Pacific Standard Time)",
  "assert": {
    "sha": "3df8c5ff9a465b031f84195a90bbb7e1be10a14d",
    "branch": "master"
  },
  "axon": {
    "sha": "d0c6a5aed5c0715c84b7462131f96e2abbb28d2b",
    "branch": "master"
  },
  "brand": {
    "sha": "e88138434dccb5a17137015eb87eb8aa6946e894",
    "branch": "master"
  },
  "buoyancy": {
    "sha": "82f1b1bee7c676fd2d3425a4a9a24d1b584cedcf",
    "branch": "master"
  },
  "chipper": {
    "sha": "64e2c318d57cda799e4eea29027257e00a4f03d0",
    "branch": "master"
  },
  "dot": {
    "sha": "1547745000dfa43738c948cfeab4cdccf706bf2d",
    "branch": "master"
  },
  "joist": {
    "sha": "e8b2d532f19c2fda11080fee2c817b7018a47df3",
    "branch": "master"
  },
  "kite": {
    "sha": "8f16c98cf2536792d4ba48026f85a25cb1f5430e",
    "branch": "master"
  },
  "phet-core": {
    "sha": "adad9ff838174d9abb614791f26f5ddee03b1a5b",
    "branch": "master"
  },
  "phetcommon": {
    "sha": "831db81ea5c33126152bba4a8618081e73c106af",
    "branch": "master"
  },
  "phetmarks": {
    "sha": "43778190c51ff193bc88c414d34959d20c4fc2a9",
    "branch": "master"
  },
  "query-string-machine": {
    "sha": "aac2d124a39b0019ff139d1221061dfbbedfd330",
    "branch": "master"
  },
  "scenery": {
    "sha": "8bc56f42b46d902094118304d535ddac8f6e6391",
    "branch": "master"
  },
  "scenery-phet": {
    "sha": "41be6264a07b4ea43d585c44348ae4b250728d99",
    "branch": "master"
  },
  "sherpa": {
    "sha": "86ed3ffd9a0a6942265fca902c5828f71d07d570",
    "branch": "master"
  },
  "sun": {
    "sha": "92d8b2d97bf3a197fa28935d36d1c273c3681db2",
    "branch": "master"
  },
  "tambo": {
    "sha": "c14e6cd2bfdf77e0bbec469f03c710ab3e36d565",
    "branch": "master"
  },
  "tandem": {
    "sha": "8079a022298978008a21b2cabc700a577059a9e6",
    "branch": "master"
  },
  "twixt": {
    "sha": "1191d04383c7bca0a1974357d0657dadaf0b44e8",
    "branch": "master"
  },
  "utterance-queue": {
    "sha": "3a7fe6dfaf4fd09851f91be8378b6c2cb67934de",
    "branch": "master"
  }
};
window.phet.chipper.strings = {"en":{"BUOYANCY/buoyancy.title":"‪Buoyancy‬","JOIST/versionPattern":"‪version {0}‬","JOIST/credits.contributors":"‪Contributors: {0}‬","JOIST/credits.graphicArts":"‪Graphic Arts: {0}‬","JOIST/credits.leadDesign":"‪Lead Design: {0}‬","JOIST/credits.qualityAssurance":"‪Quality Assurance: {0}‬","JOIST/credits.softwareDevelopment":"‪Software Development: {0}‬","JOIST/credits.soundDesign":"‪Sound Design: {0}‬","JOIST/credits.team":"‪Team: {0}‬","JOIST/credits.thanks":"‪Thanks‬","JOIST/credits.title":"‪Credits‬","JOIST/credits.translation":"‪Translation‬","JOIST/a11y.homeScreenDescription":"‪Go to Home Screen.‬","JOIST/a11y.home":"‪Home‬","JOIST/a11y.homeScreenDescriptionPattern":"‪Welcome to {{name}}. It has {{screens}} interactive screens that you can explore. Choose a screen to start exploring.‬","JOIST/a11y.keyboardHelp.hotKeysAndHelp":"‪Keyboard Shortcuts‬","JOIST/keyboardShortcuts.title":"‪Keyboard Shortcuts‬","JOIST/keyboardShortcuts.toGetStarted":"‪to get started‬","JOIST/a11y.keyboardHelp.tabToGetStarted":"‪Tab to get started.‬","JOIST/a11y.simScreens":"‪Sim Screens‬","JOIST/a11y.simResources":"‪Sim Resources‬","JOIST/a11y.soundToggle.label":"‪Mute Sound‬","JOIST/a11y.soundToggle.alert.simSoundOn":"‪Sim sound on.‬","JOIST/a11y.soundToggle.alert.simSoundOff":"‪Sim sound off.‬","JOIST/options.title":"‪Options‬","JOIST/a11y.phetMenu":"‪PhET Menu‬","JOIST/menuItem.about":"‪About…‬","JOIST/menuItem.enhancedSound":"‪Enhanced Sound‬","JOIST/menuItem.fullscreen":"‪Full Screen‬","JOIST/menuItem.getUpdate":"‪Check for Updates…‬","JOIST/menuItem.mailInputEventsLog":"‪Mail Input Events Log‬","JOIST/menuItem.options":"‪Options…‬","JOIST/menuItem.outputInputEventsLog":"‪Output Input Events Log‬","JOIST/menuItem.phetWebsite":"‪PhET Website…‬","JOIST/menuItem.reportAProblem":"‪Report a Problem…‬","JOIST/menuItem.screenshot":"‪Screenshot‬","JOIST/menuItem.submitInputEventsLog":"‪Submit Input Events Log‬","JOIST/queryParametersWarningDialog.invalidQueryParameters":"‪Invalid Query Parameters‬","JOIST/queryParametersWarningDialog.oneOrMoreQueryParameters":"‪One or more of these query parameters have<br>invalid values:‬","JOIST/queryParametersWarningDialog.theSimulationWillStart":"‪The simulation will start with default values for<br>those query parameters.‬","JOIST/a11y.screenNamePattern":"‪{{name}} Screen‬","JOIST/a11y.screenSimPattern":"‪{{screenName}}, {{simName}}‬","JOIST/a11y.simScreen":"‪Sim Screen‬","JOIST/ieErrorPage.platformError":"‪Platform Error‬","JOIST/ieErrorPage.ieIsNotSupported":"‪Internet Explorer is not supported.‬","JOIST/ieErrorPage.useDifferentBrowser":"‪Please use a different browser to run this simulation.‬","JOIST/simTitleWithScreenNamePattern":"‪{{simName}} — {{screenName}}‬","JOIST/updates.checking":"‪Checking for updates…‬","JOIST/updates.getUpdate":"‪Get Update…‬","JOIST/updates.newVersionAvailable":"‪There is a new version available: {0}.‬","JOIST/updates.noThanks":"‪No Thanks‬","JOIST/updates.offline":"‪Unable to check for updates.‬","JOIST/updates.outOfDate":"‪New version available‬","JOIST/updates.upToDate":"‪This simulation is up to date.‬","JOIST/updates.yourCurrentVersion":"‪Your current version is: {0}.‬","SCENERY_PHET/a11y.simSection.controlArea":"‪Control Area‬","SCENERY_PHET/a11y.simSection.playArea":"‪Play Area‬","SCENERY_PHET/a11y.simSection.screenSummary.multiScreenIntro":"‪The {{screen}} changes as you play with it. It has a Play Area and a Control Area.‬","SCENERY_PHET/a11y.simSection.screenSummary.keyboardShortcutsHint":"‪If needed, check out keyboard shortcuts under Sim Resources.‬","SCENERY_PHET/a11y.simSection.screenSummary.singleScreenIntroPattern":"‪{{sim}} is an interactive sim. It changes as you play with it. It has a Play Area and a Control Area.‬","SCENERY_PHET/a11y.resetAll.label":"‪Reset All‬","SCENERY_PHET/a11y.resetAll.alert":"‪Sim screen restarted. Everything reset.‬","SCENERY_PHET/key.alt":"‪Alt‬","SCENERY_PHET/key.capsLock":"‪Caps Lock‬","SCENERY_PHET/key.esc":"‪Esc‬","SCENERY_PHET/key.end":"‪End‬","SCENERY_PHET/key.enter":"‪Enter‬","SCENERY_PHET/key.fn":"‪Fn‬","SCENERY_PHET/key.home":"‪Home‬","SCENERY_PHET/key.pageDown":"‪Pg Dn‬","SCENERY_PHET/key.pageUp":"‪Pg Up‬","SCENERY_PHET/key.space":"‪Space‬","SCENERY_PHET/key.shift":"‪Shift‬","SCENERY_PHET/key.tab":"‪Tab‬","SCENERY_PHET/keyboardHelpDialog.basicActions":"‪Basic Actions‬","SCENERY_PHET/keyboardHelpDialog.exitADialog":"‪Exit a dialog‬","SCENERY_PHET/keyboardHelpDialog.moveBetweenItemsInAGroup":"‪Move between items in a group‬","SCENERY_PHET/keyboardHelpDialog.moveToNextItemOrGroup":"‪Move to next item or group‬","SCENERY_PHET/keyboardHelpDialog.moveToPreviousItemOrGroup":"‪Move to previous item or group‬","SCENERY_PHET/keyboardHelpDialog.pressButtons":"‪Press buttons‬","SCENERY_PHET/keyboardHelpDialog.toggleCheckboxes":"‪Toggle checkboxes‬","SCENERY_PHET/a11y.keyboardHelpDialog.general.tabGroupDescription":"‪Move to next item or group with Tab key.‬","SCENERY_PHET/a11y.keyboardHelpDialog.general.shiftTabGroupDescription":"‪Move to previous item or group with Shift plus Tab key.‬","SCENERY_PHET/a11y.keyboardHelpDialog.general.pressButtonsDescription":"‪Press buttons with Space key.‬","SCENERY_PHET/a11y.keyboardHelpDialog.general.groupNavigationDescription":"‪Move between items in a group with Left and Right arrow keys or Up and Down arrow keys.‬","SCENERY_PHET/a11y.keyboardHelpDialog.general.exitDialogDescription":"‪Exit a dialog with Escape key.‬","SCENERY_PHET/a11y.keyboardHelpDialog.general.toggleCheckboxesDescription":"‪Toggle checkboxes with Space key.‬","SCENERY_PHET/keyboardHelpDialog.or":"‪or‬","SCENERY_PHET/keyboardHelpDialog.hyphen":"‪-‬","SCENERY_PHET/keyboardHelpDialog.grabOrReleaseHeadingPattern":"‪Grab or Release {{thing}}‬","SCENERY_PHET/keyboardHelpDialog.grabOrReleaseLabelPattern":"‪Grab or release {{thing}}‬","SCENERY_PHET/a11y.keyboardHelpDialog.grabOrReleaseDescriptionPattern":"‪Grab or release {{thing}} with Space or Enter keys.‬","SUN/a11y.close":"‪Close‬"}};
window.phet.chipper.isDebugBuild = false;
window.phet.chipper.packageObject = {"name":"buoyancy","version":"1.0.0-dev.0","license":"GPL-3.0","repository":{"type":"git","url":"https://github.com/phetsims/buoyancy.git"},"devDependencies":{"grunt":"~1.1.0"},"phet":{"requirejsNamespace":"BUOYANCY","simulation":true,"runnable":true,"supportedBrands":["phet","adapted-from-phet"]},"eslintConfig":{"extends":"../chipper/eslint/sim_es6_eslintrc.js"}};
// Copyright 2018-2020, University of Colorado Boulder
/**
 * Detects if the browser in use is Internet Explorer, and shows an error page if so.
 *
 * @author Chris Klusendorf (PhET Interactive Simulations)
 */'use strict';// constants
var CSS_STYLING="#ie-error-container {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 100vh;\n    width: 100vw;\n    background: white;\n    z-index: 1000000;\n    align-items: center;\n  }\n\n  #ie-error {\n    position: relative;\n    border-radius: 10px;\n    max-width: 550px;\n    margin: auto;\n    padding: 30px;\n    font-size: 20px;\n    font-weight: 500;\n    font-family: sans-serif;\n    text-align: center;\n  }\n\n  #ie-error .header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 46px;\n  }\n\n  #ie-error .header .h1 {\n    font-size: 30px;\n    font-weight: 500;\n    margin: 0 0 0 10px;\n  }\n\n  #ie-error .header svg {\n    width: 36px;\n  }\n\n  #ie-error p {\n    margin: 14px 0;\n  }";var ERROR_ICON_SVG="<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 27.75 24.44\">\n     <g>\n       <path style=\"fill:red\" d=\"M12.52,0.78L0.21,22.1c-0.6,1.04,0.15,2.34,1.35,2.34h24.62c1.2,0,1.95-1.3,1.35-2.34L15.22,0.78\n         C14.62-0.26,13.12-0.26,12.52,0.78z\"/>\n       <g>\n         <path style=\"fill:white\" d=\"M13.45,17.19c-1.13-6.12-1.7-9.42-1.7-9.9c0-0.59,0.22-1.07,0.65-1.43c0.44-0.36,0.93-0.54,1.48-0.54\n           c0.59,0,1.09,0.19,1.5,0.58C15.79,6.29,16,6.74,16,7.27c0,0.5-0.57,3.81-1.7,9.92H13.45z M15.75,20.46c0,0.52-0.18,0.97-0.55,1.34\n           c-0.37,0.37-0.81,0.55-1.32,0.55c-0.52,0-0.97-0.19-1.33-0.55c-0.37-0.37-0.55-0.81-0.55-1.34c0-0.51,0.18-0.95,0.55-1.32\n           c0.37-0.37,0.81-0.55,1.33-0.55c0.51,0,0.95,0.18,1.32,0.55C15.57,19.5,15.75,19.94,15.75,20.46z\"/>\n       </g>\n     </g>\n   </svg>";// Detect which version of IE is in use. Remains -1 if not using IE. Copied from phet-core/platform.js.
var userAgent=window.navigator.userAgent;var releaseVersion=-1;var regex=null;if(window.navigator.appName==='Microsoft Internet Explorer'){regex=new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})');if(regex.exec(userAgent)!==null){releaseVersion=parseFloat(RegExp.$1);}}else if(window.navigator.appName==='Netscape'){regex=new RegExp('Trident/.*rv:([0-9]{1,}[.0-9]{0,})');if(regex.exec(userAgent)!==null){releaseVersion=parseFloat(RegExp.$1);}}// Browser is IE, so set a global to alert other scripts and show the error message. Can also be revealed with the
// flag `showInternetExplorerError`
if(releaseVersion!==-1||window.location.search.indexOf('showInternetExplorerError')>=0){// create the html elements dynamically
var ieErrorStyling=document.createElement('style');ieErrorStyling.innerHTML=CSS_STYLING;var ieErrorContainer=document.createElement('div');ieErrorContainer.id='ie-error-container';var ieError=document.createElement('div');ieError.id='ie-error';var header=document.createElement('div');header.className='header';var ieErrorHeader=document.createElement('h1');ieErrorHeader.id='ie-error-header';ieErrorHeader.className='h1';var ieErrorNotSupported=document.createElement('p');ieErrorNotSupported.id='ie-error-not-supported';var ieErrorDifferentBrowser=document.createElement('p');ieErrorDifferentBrowser.id='ie-error-header';// get the locale specified as a query parameter, if there is one
var localeRegEx=/locale=[a-z]{2}(_[A-Z]{2}){0,1}/g;var localeQueryParameterMatches=window.location.search.match(localeRegEx)||[];var localeQueryParameter=localeQueryParameterMatches.length?localeQueryParameterMatches[0]:null;var localeQueryParameterValue=localeQueryParameter?localeQueryParameter.split('=')[1]:null;// Prioritize the locale specified as a query parameter, otherwise fallback to the built locale. Then get the strings
// in that locale.
var locale=localeQueryParameterValue&&window.phet.chipper.strings[localeQueryParameterValue]?localeQueryParameterValue:window.phet.chipper.locale;var strings=window.phet.chipper.strings[locale];// fill in the translated strings
ieErrorHeader.innerText=strings['JOIST/ieErrorPage.platformError'];ieErrorNotSupported.innerText=strings['JOIST/ieErrorPage.ieIsNotSupported'];ieErrorDifferentBrowser.innerText=strings['JOIST/ieErrorPage.useDifferentBrowser'];// add the html elements to the page
header.innerHTML=ERROR_ICON_SVG;header.appendChild(ieErrorHeader);ieError.appendChild(header);ieError.appendChild(ieErrorNotSupported);ieError.appendChild(ieErrorDifferentBrowser);ieErrorContainer.appendChild(ieError);document.body.appendChild(ieErrorStyling);document.body.appendChild(ieErrorContainer);// reveal the error
document.getElementById('ie-error-container').style.display='flex';}