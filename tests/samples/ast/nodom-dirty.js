// DO NOT MODIFY, THIS WAS AUTO_GENERATED

exports.ast = {
 "type": "Program",
 "body": [
  {
   "type": "VariableDeclaration",
   "declarations": [
    {
     "type": "VariableDeclarator",
     "id": {
      "type": "Identifier",
      "name": "vm",
      "loc": {
       "start": {
        "line": 1,
        "column": 5
       },
       "end": {
        "line": 1,
        "column": 7
       }
      }
     },
     "init": {
      "type": "ObjectExpression",
      "properties": [
       {
        "type": "Property",
        "key": {
         "type": "Identifier",
         "name": "observableThing",
         "loc": {
          "start": {
           "line": 2,
           "column": 4
          },
          "end": {
           "line": 2,
           "column": 19
          }
         }
        },
        "value": {
         "type": "CallExpression",
         "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
           "type": "Identifier",
           "name": "ko",
           "loc": {
            "start": {
             "line": 2,
             "column": 21
            },
            "end": {
             "line": 2,
             "column": 23
            }
           }
          },
          "property": {
           "type": "Identifier",
           "name": "observable",
           "loc": {
            "start": {
             "line": 2,
             "column": 24
            },
            "end": {
             "line": 2,
             "column": 34
            }
           }
          },
          "loc": {
           "start": {
            "line": 2,
            "column": 21
           },
           "end": {
            "line": 2,
            "column": 34
           }
          }
         },
         "arguments": [],
         "loc": {
          "start": {
           "line": 2,
           "column": 21
          },
          "end": {
           "line": 2,
           "column": 36
          }
         }
        },
        "kind": "init",
        "loc": {
         "start": {
          "line": 2,
          "column": 4
         },
         "end": {
          "line": 2,
          "column": 36
         }
        }
       },
       {
        "type": "Property",
        "key": {
         "type": "Identifier",
         "name": "doStuff",
         "loc": {
          "start": {
           "line": 3,
           "column": 4
          },
          "end": {
           "line": 3,
           "column": 11
          }
         }
        },
        "value": {
         "type": "FunctionExpression",
         "id": null,
         "params": [],
         "defaults": [],
         "body": {
          "type": "BlockStatement",
          "body": [
           {
            "type": "ExpressionStatement",
            "expression": {
             "type": "CallExpression",
             "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
               "type": "CallExpression",
               "callee": {
                "type": "Identifier",
                "name": "$",
                "loc": {
                 "start": {
                  "line": 4,
                  "column": 8
                 },
                 "end": {
                  "line": 4,
                  "column": 9
                 }
                }
               },
               "arguments": [
                {
                 "type": "Literal",
                 "value": "#this",
                 "loc": {
                  "start": {
                   "line": 4,
                   "column": 10
                  },
                  "end": {
                   "line": 4,
                   "column": 17
                  }
                 }
                }
               ],
               "loc": {
                "start": {
                 "line": 4,
                 "column": 8
                },
                "end": {
                 "line": 4,
                 "column": 18
                }
               }
              },
              "property": {
               "type": "Identifier",
               "name": "focus",
               "loc": {
                "start": {
                 "line": 4,
                 "column": 19
                },
                "end": {
                 "line": 4,
                 "column": 24
                }
               }
              },
              "loc": {
               "start": {
                "line": 4,
                "column": 8
               },
               "end": {
                "line": 4,
                "column": 24
               }
              }
             },
             "arguments": [],
             "loc": {
              "start": {
               "line": 4,
               "column": 8
              },
              "end": {
               "line": 4,
               "column": 26
              }
             }
            },
            "loc": {
             "start": {
              "line": 4,
              "column": 8
             },
             "end": {
              "line": 4,
              "column": 27
             }
            }
           },
           {
            "type": "ExpressionStatement",
            "expression": {
             "type": "CallExpression",
             "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
               "type": "CallExpression",
               "callee": {
                "type": "Identifier",
                "name": "jQuery",
                "loc": {
                 "start": {
                  "line": 5,
                  "column": 8
                 },
                 "end": {
                  "line": 5,
                  "column": 14
                 }
                }
               },
               "arguments": [
                {
                 "type": "Literal",
                 "value": ".that",
                 "loc": {
                  "start": {
                   "line": 5,
                   "column": 15
                  },
                  "end": {
                   "line": 5,
                   "column": 22
                  }
                 }
                }
               ],
               "loc": {
                "start": {
                 "line": 5,
                 "column": 8
                },
                "end": {
                 "line": 5,
                 "column": 23
                }
               }
              },
              "property": {
               "type": "Identifier",
               "name": "focus",
               "loc": {
                "start": {
                 "line": 5,
                 "column": 24
                },
                "end": {
                 "line": 5,
                 "column": 29
                }
               }
              },
              "loc": {
               "start": {
                "line": 5,
                "column": 8
               },
               "end": {
                "line": 5,
                "column": 29
               }
              }
             },
             "arguments": [],
             "loc": {
              "start": {
               "line": 5,
               "column": 8
              },
              "end": {
               "line": 5,
               "column": 31
              }
             }
            },
            "loc": {
             "start": {
              "line": 5,
              "column": 8
             },
             "end": {
              "line": 5,
              "column": 32
             }
            }
           },
           {
            "type": "ExpressionStatement",
            "expression": {
             "type": "CallExpression",
             "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
               "type": "CallExpression",
               "callee": {
                "type": "Identifier",
                "name": "$",
                "loc": {
                 "start": {
                  "line": 6,
                  "column": 8
                 },
                 "end": {
                  "line": 6,
                  "column": 9
                 }
                }
               },
               "arguments": [
                {
                 "type": "Literal",
                 "value": "body",
                 "loc": {
                  "start": {
                   "line": 6,
                   "column": 10
                  },
                  "end": {
                   "line": 6,
                   "column": 16
                  }
                 }
                }
               ],
               "loc": {
                "start": {
                 "line": 6,
                 "column": 8
                },
                "end": {
                 "line": 6,
                 "column": 17
                }
               }
              },
              "property": {
               "type": "Identifier",
               "name": "focus",
               "loc": {
                "start": {
                 "line": 6,
                 "column": 18
                },
                "end": {
                 "line": 6,
                 "column": 23
                }
               }
              },
              "loc": {
               "start": {
                "line": 6,
                "column": 8
               },
               "end": {
                "line": 6,
                "column": 23
               }
              }
             },
             "arguments": [],
             "loc": {
              "start": {
               "line": 6,
               "column": 8
              },
              "end": {
               "line": 6,
               "column": 25
              }
             }
            },
            "loc": {
             "start": {
              "line": 6,
              "column": 8
             },
             "end": {
              "line": 6,
              "column": 26
             }
            }
           },
           {
            "type": "ExpressionStatement",
            "expression": {
             "type": "CallExpression",
             "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
               "type": "Identifier",
               "name": "document",
               "loc": {
                "start": {
                 "line": 7,
                 "column": 8
                },
                "end": {
                 "line": 7,
                 "column": 16
                }
               }
              },
              "property": {
               "type": "Identifier",
               "name": "getElementById",
               "loc": {
                "start": {
                 "line": 7,
                 "column": 17
                },
                "end": {
                 "line": 7,
                 "column": 31
                }
               }
              },
              "loc": {
               "start": {
                "line": 7,
                "column": 8
               },
               "end": {
                "line": 7,
                "column": 31
               }
              }
             },
             "arguments": [
              {
               "type": "Literal",
               "value": "what",
               "loc": {
                "start": {
                 "line": 7,
                 "column": 32
                },
                "end": {
                 "line": 7,
                 "column": 38
                }
               }
              }
             ],
             "loc": {
              "start": {
               "line": 7,
               "column": 8
              },
              "end": {
               "line": 7,
               "column": 39
              }
             }
            },
            "loc": {
             "start": {
              "line": 7,
              "column": 8
             },
             "end": {
              "line": 7,
              "column": 40
             }
            }
           },
           {
            "type": "ExpressionStatement",
            "expression": {
             "type": "CallExpression",
             "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
               "type": "Identifier",
               "name": "$",
               "loc": {
                "start": {
                 "line": 8,
                 "column": 8
                },
                "end": {
                 "line": 8,
                 "column": 9
                }
               }
              },
              "property": {
               "type": "Identifier",
               "name": "isArray",
               "loc": {
                "start": {
                 "line": 8,
                 "column": 10
                },
                "end": {
                 "line": 8,
                 "column": 17
                }
               }
              },
              "loc": {
               "start": {
                "line": 8,
                "column": 8
               },
               "end": {
                "line": 8,
                "column": 17
               }
              }
             },
             "arguments": [
              {
               "type": "ArrayExpression",
               "elements": [],
               "loc": {
                "start": {
                 "line": 8,
                 "column": 18
                },
                "end": {
                 "line": 8,
                 "column": 20
                }
               }
              }
             ],
             "loc": {
              "start": {
               "line": 8,
               "column": 8
              },
              "end": {
               "line": 8,
               "column": 21
              }
             }
            },
            "loc": {
             "start": {
              "line": 8,
              "column": 8
             },
             "end": {
              "line": 8,
              "column": 22
             }
            }
           }
          ],
          "loc": {
           "start": {
            "line": 3,
            "column": 25
           },
           "end": {
            "line": 9,
            "column": 5
           }
          }
         },
         "rest": null,
         "generator": false,
         "expression": false,
         "loc": {
          "start": {
           "line": 3,
           "column": 13
          },
          "end": {
           "line": 9,
           "column": 5
          }
         }
        },
        "kind": "init",
        "loc": {
         "start": {
          "line": 3,
          "column": 4
         },
         "end": {
          "line": 9,
          "column": 5
         }
        }
       }
      ],
      "loc": {
       "start": {
        "line": 1,
        "column": 10
       },
       "end": {
        "line": 10,
        "column": 1
       }
      }
     },
     "loc": {
      "start": {
       "line": 1,
       "column": 5
      },
      "end": {
       "line": 10,
       "column": 1
      }
     }
    }
   ],
   "kind": "var",
   "loc": {
    "start": {
     "line": 1,
     "column": 1
    },
    "end": {
     "line": 10,
     "column": 2
    }
   }
  },
  {
   "type": "FunctionDeclaration",
   "id": {
    "type": "Identifier",
    "name": "ViewModelCtor",
    "loc": {
     "start": {
      "line": 12,
      "column": 9
     },
     "end": {
      "line": 12,
      "column": 22
     }
    }
   },
   "params": [],
   "defaults": [],
   "body": {
    "type": "BlockStatement",
    "body": [
     {
      "type": "VariableDeclaration",
      "declarations": [
       {
        "type": "VariableDeclarator",
        "id": {
         "type": "Identifier",
         "name": "a",
         "loc": {
          "start": {
           "line": 13,
           "column": 8
          },
          "end": {
           "line": 13,
           "column": 9
          }
         }
        },
        "init": {
         "type": "CallExpression",
         "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
           "type": "Identifier",
           "name": "ko",
           "loc": {
            "start": {
             "line": 13,
             "column": 12
            },
            "end": {
             "line": 13,
             "column": 14
            }
           }
          },
          "property": {
           "type": "Identifier",
           "name": "observable",
           "loc": {
            "start": {
             "line": 13,
             "column": 15
            },
            "end": {
             "line": 13,
             "column": 25
            }
           }
          },
          "loc": {
           "start": {
            "line": 13,
            "column": 12
           },
           "end": {
            "line": 13,
            "column": 25
           }
          }
         },
         "arguments": [],
         "loc": {
          "start": {
           "line": 13,
           "column": 12
          },
          "end": {
           "line": 13,
           "column": 27
          }
         }
        },
        "loc": {
         "start": {
          "line": 13,
          "column": 8
         },
         "end": {
          "line": 13,
          "column": 27
         }
        }
       },
       {
        "type": "VariableDeclarator",
        "id": {
         "type": "Identifier",
         "name": "b",
         "loc": {
          "start": {
           "line": 14,
           "column": 8
          },
          "end": {
           "line": 14,
           "column": 9
          }
         }
        },
        "init": {
         "type": "FunctionExpression",
         "id": null,
         "params": [],
         "defaults": [],
         "body": {
          "type": "BlockStatement",
          "body": [
           {
            "type": "ExpressionStatement",
            "expression": {
             "type": "CallExpression",
             "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
               "type": "CallExpression",
               "callee": {
                "type": "Identifier",
                "name": "$",
                "loc": {
                 "start": {
                  "line": 15,
                  "column": 12
                 },
                 "end": {
                  "line": 15,
                  "column": 13
                 }
                }
               },
               "arguments": [
                {
                 "type": "Literal",
                 "value": "#this",
                 "loc": {
                  "start": {
                   "line": 15,
                   "column": 14
                  },
                  "end": {
                   "line": 15,
                   "column": 21
                  }
                 }
                }
               ],
               "loc": {
                "start": {
                 "line": 15,
                 "column": 12
                },
                "end": {
                 "line": 15,
                 "column": 22
                }
               }
              },
              "property": {
               "type": "Identifier",
               "name": "focus",
               "loc": {
                "start": {
                 "line": 15,
                 "column": 23
                },
                "end": {
                 "line": 15,
                 "column": 28
                }
               }
              },
              "loc": {
               "start": {
                "line": 15,
                "column": 12
               },
               "end": {
                "line": 15,
                "column": 28
               }
              }
             },
             "arguments": [],
             "loc": {
              "start": {
               "line": 15,
               "column": 12
              },
              "end": {
               "line": 15,
               "column": 30
              }
             }
            },
            "loc": {
             "start": {
              "line": 15,
              "column": 12
             },
             "end": {
              "line": 15,
              "column": 31
             }
            }
           },
           {
            "type": "ExpressionStatement",
            "expression": {
             "type": "CallExpression",
             "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
               "type": "CallExpression",
               "callee": {
                "type": "Identifier",
                "name": "jQuery",
                "loc": {
                 "start": {
                  "line": 16,
                  "column": 12
                 },
                 "end": {
                  "line": 16,
                  "column": 18
                 }
                }
               },
               "arguments": [
                {
                 "type": "Literal",
                 "value": ".that",
                 "loc": {
                  "start": {
                   "line": 16,
                   "column": 19
                  },
                  "end": {
                   "line": 16,
                   "column": 26
                  }
                 }
                }
               ],
               "loc": {
                "start": {
                 "line": 16,
                 "column": 12
                },
                "end": {
                 "line": 16,
                 "column": 27
                }
               }
              },
              "property": {
               "type": "Identifier",
               "name": "focus",
               "loc": {
                "start": {
                 "line": 16,
                 "column": 28
                },
                "end": {
                 "line": 16,
                 "column": 33
                }
               }
              },
              "loc": {
               "start": {
                "line": 16,
                "column": 12
               },
               "end": {
                "line": 16,
                "column": 33
               }
              }
             },
             "arguments": [],
             "loc": {
              "start": {
               "line": 16,
               "column": 12
              },
              "end": {
               "line": 16,
               "column": 35
              }
             }
            },
            "loc": {
             "start": {
              "line": 16,
              "column": 12
             },
             "end": {
              "line": 16,
              "column": 36
             }
            }
           },
           {
            "type": "ExpressionStatement",
            "expression": {
             "type": "CallExpression",
             "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
               "type": "CallExpression",
               "callee": {
                "type": "Identifier",
                "name": "$",
                "loc": {
                 "start": {
                  "line": 17,
                  "column": 12
                 },
                 "end": {
                  "line": 17,
                  "column": 13
                 }
                }
               },
               "arguments": [
                {
                 "type": "Literal",
                 "value": "body",
                 "loc": {
                  "start": {
                   "line": 17,
                   "column": 14
                  },
                  "end": {
                   "line": 17,
                   "column": 20
                  }
                 }
                }
               ],
               "loc": {
                "start": {
                 "line": 17,
                 "column": 12
                },
                "end": {
                 "line": 17,
                 "column": 21
                }
               }
              },
              "property": {
               "type": "Identifier",
               "name": "focus",
               "loc": {
                "start": {
                 "line": 17,
                 "column": 22
                },
                "end": {
                 "line": 17,
                 "column": 27
                }
               }
              },
              "loc": {
               "start": {
                "line": 17,
                "column": 12
               },
               "end": {
                "line": 17,
                "column": 27
               }
              }
             },
             "arguments": [],
             "loc": {
              "start": {
               "line": 17,
               "column": 12
              },
              "end": {
               "line": 17,
               "column": 29
              }
             }
            },
            "loc": {
             "start": {
              "line": 17,
              "column": 12
             },
             "end": {
              "line": 17,
              "column": 30
             }
            }
           },
           {
            "type": "ExpressionStatement",
            "expression": {
             "type": "CallExpression",
             "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
               "type": "Identifier",
               "name": "document",
               "loc": {
                "start": {
                 "line": 18,
                 "column": 12
                },
                "end": {
                 "line": 18,
                 "column": 20
                }
               }
              },
              "property": {
               "type": "Identifier",
               "name": "getElementsByClassName",
               "loc": {
                "start": {
                 "line": 18,
                 "column": 21
                },
                "end": {
                 "line": 18,
                 "column": 43
                }
               }
              },
              "loc": {
               "start": {
                "line": 18,
                "column": 12
               },
               "end": {
                "line": 18,
                "column": 43
               }
              }
             },
             "arguments": [
              {
               "type": "Literal",
               "value": "ok",
               "loc": {
                "start": {
                 "line": 18,
                 "column": 44
                },
                "end": {
                 "line": 18,
                 "column": 48
                }
               }
              }
             ],
             "loc": {
              "start": {
               "line": 18,
               "column": 12
              },
              "end": {
               "line": 18,
               "column": 49
              }
             }
            },
            "loc": {
             "start": {
              "line": 18,
              "column": 12
             },
             "end": {
              "line": 18,
              "column": 50
             }
            }
           },
           {
            "type": "ExpressionStatement",
            "expression": {
             "type": "CallExpression",
             "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
               "type": "Identifier",
               "name": "jQuery",
               "loc": {
                "start": {
                 "line": 19,
                 "column": 12
                },
                "end": {
                 "line": 19,
                 "column": 18
                }
               }
              },
              "property": {
               "type": "Identifier",
               "name": "isArray",
               "loc": {
                "start": {
                 "line": 19,
                 "column": 19
                },
                "end": {
                 "line": 19,
                 "column": 26
                }
               }
              },
              "loc": {
               "start": {
                "line": 19,
                "column": 12
               },
               "end": {
                "line": 19,
                "column": 26
               }
              }
             },
             "arguments": [
              {
               "type": "ArrayExpression",
               "elements": [],
               "loc": {
                "start": {
                 "line": 19,
                 "column": 27
                },
                "end": {
                 "line": 19,
                 "column": 29
                }
               }
              }
             ],
             "loc": {
              "start": {
               "line": 19,
               "column": 12
              },
              "end": {
               "line": 19,
               "column": 30
              }
             }
            },
            "loc": {
             "start": {
              "line": 19,
              "column": 12
             },
             "end": {
              "line": 19,
              "column": 31
             }
            }
           }
          ],
          "loc": {
           "start": {
            "line": 14,
            "column": 24
           },
           "end": {
            "line": 20,
            "column": 9
           }
          }
         },
         "rest": null,
         "generator": false,
         "expression": false,
         "loc": {
          "start": {
           "line": 14,
           "column": 12
          },
          "end": {
           "line": 20,
           "column": 9
          }
         }
        },
        "loc": {
         "start": {
          "line": 14,
          "column": 8
         },
         "end": {
          "line": 20,
          "column": 9
         }
        }
       }
      ],
      "kind": "var",
      "loc": {
       "start": {
        "line": 13,
        "column": 4
       },
       "end": {
        "line": 20,
        "column": 10
       }
      }
     },
     {
      "type": "ReturnStatement",
      "argument": {
       "type": "ObjectExpression",
       "properties": [
        {
         "type": "Property",
         "key": {
          "type": "Identifier",
          "name": "a",
          "loc": {
           "start": {
            "line": 22,
            "column": 8
           },
           "end": {
            "line": 22,
            "column": 9
           }
          }
         },
         "value": {
          "type": "Identifier",
          "name": "a",
          "loc": {
           "start": {
            "line": 22,
            "column": 11
           },
           "end": {
            "line": 22,
            "column": 12
           }
          }
         },
         "kind": "init",
         "loc": {
          "start": {
           "line": 22,
           "column": 8
          },
          "end": {
           "line": 22,
           "column": 12
          }
         }
        },
        {
         "type": "Property",
         "key": {
          "type": "Identifier",
          "name": "b",
          "loc": {
           "start": {
            "line": 23,
            "column": 8
           },
           "end": {
            "line": 23,
            "column": 9
           }
          }
         },
         "value": {
          "type": "Identifier",
          "name": "b",
          "loc": {
           "start": {
            "line": 23,
            "column": 11
           },
           "end": {
            "line": 23,
            "column": 12
           }
          }
         },
         "kind": "init",
         "loc": {
          "start": {
           "line": 23,
           "column": 8
          },
          "end": {
           "line": 23,
           "column": 12
          }
         }
        }
       ],
       "loc": {
        "start": {
         "line": 21,
         "column": 11
        },
        "end": {
         "line": 24,
         "column": 5
        }
       }
      },
      "loc": {
       "start": {
        "line": 21,
        "column": 4
       },
       "end": {
        "line": 24,
        "column": 6
       }
      }
     }
    ],
    "loc": {
     "start": {
      "line": 12,
      "column": 25
     },
     "end": {
      "line": 25,
      "column": 1
     }
    }
   },
   "rest": null,
   "generator": false,
   "expression": false,
   "loc": {
    "start": {
     "line": 12,
     "column": 0
    },
    "end": {
     "line": 25,
     "column": 1
    }
   }
  }
 ],
 "loc": {
  "start": {
   "line": 1,
   "column": 1
  },
  "end": {
   "line": 25,
   "column": 1
  }
 },
 "comments": []
};