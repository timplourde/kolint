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
       }
      ],
      "loc": {
       "start": {
        "line": 1,
        "column": 10
       },
       "end": {
        "line": 3,
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
       "line": 3,
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
     "line": 3,
     "column": 2
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
      "type": "MemberExpression",
      "computed": false,
      "object": {
       "type": "Identifier",
       "name": "vm",
       "loc": {
        "start": {
         "line": 5,
         "column": 0
        },
        "end": {
         "line": 5,
         "column": 2
        }
       }
      },
      "property": {
       "type": "Identifier",
       "name": "observableThing",
       "loc": {
        "start": {
         "line": 5,
         "column": 3
        },
        "end": {
         "line": 5,
         "column": 18
        }
       }
      },
      "loc": {
       "start": {
        "line": 5,
        "column": 0
       },
       "end": {
        "line": 5,
        "column": 18
       }
      }
     },
     "property": {
      "type": "Identifier",
      "name": "subscribe",
      "loc": {
       "start": {
        "line": 5,
        "column": 19
       },
       "end": {
        "line": 5,
        "column": 28
       }
      }
     },
     "loc": {
      "start": {
       "line": 5,
       "column": 0
      },
      "end": {
       "line": 5,
       "column": 28
      }
     }
    },
    "arguments": [
     {
      "type": "FunctionExpression",
      "id": null,
      "params": [
       {
        "type": "Identifier",
        "name": "newVal",
        "loc": {
         "start": {
          "line": 5,
          "column": 39
         },
         "end": {
          "line": 5,
          "column": 45
         }
        }
       }
      ],
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
            "type": "Identifier",
            "name": "console",
            "loc": {
             "start": {
              "line": 6,
              "column": 4
             },
             "end": {
              "line": 6,
              "column": 11
             }
            }
           },
           "property": {
            "type": "Identifier",
            "name": "log",
            "loc": {
             "start": {
              "line": 6,
              "column": 12
             },
             "end": {
              "line": 6,
              "column": 15
             }
            }
           },
           "loc": {
            "start": {
             "line": 6,
             "column": 4
            },
            "end": {
             "line": 6,
             "column": 15
            }
           }
          },
          "arguments": [
           {
            "type": "Identifier",
            "name": "newVal",
            "loc": {
             "start": {
              "line": 6,
              "column": 16
             },
             "end": {
              "line": 6,
              "column": 22
             }
            }
           }
          ],
          "loc": {
           "start": {
            "line": 6,
            "column": 4
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
           "column": 4
          },
          "end": {
           "line": 6,
           "column": 24
          }
         }
        }
       ],
       "loc": {
        "start": {
         "line": 5,
         "column": 47
        },
        "end": {
         "line": 7,
         "column": 1
        }
       }
      },
      "rest": null,
      "generator": false,
      "expression": false,
      "loc": {
       "start": {
        "line": 5,
        "column": 29
       },
       "end": {
        "line": 7,
        "column": 1
       }
      }
     }
    ],
    "loc": {
     "start": {
      "line": 5,
      "column": 0
     },
     "end": {
      "line": 7,
      "column": 2
     }
    }
   },
   "loc": {
    "start": {
     "line": 5,
     "column": 0
    },
    "end": {
     "line": 7,
     "column": 3
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
      "line": 9,
      "column": 9
     },
     "end": {
      "line": 9,
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
           "line": 10,
           "column": 8
          },
          "end": {
           "line": 10,
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
             "line": 10,
             "column": 12
            },
            "end": {
             "line": 10,
             "column": 14
            }
           }
          },
          "property": {
           "type": "Identifier",
           "name": "observable",
           "loc": {
            "start": {
             "line": 10,
             "column": 15
            },
            "end": {
             "line": 10,
             "column": 25
            }
           }
          },
          "loc": {
           "start": {
            "line": 10,
            "column": 12
           },
           "end": {
            "line": 10,
            "column": 25
           }
          }
         },
         "arguments": [],
         "loc": {
          "start": {
           "line": 10,
           "column": 12
          },
          "end": {
           "line": 10,
           "column": 27
          }
         }
        },
        "loc": {
         "start": {
          "line": 10,
          "column": 8
         },
         "end": {
          "line": 10,
          "column": 27
         }
        }
       }
      ],
      "kind": "var",
      "loc": {
       "start": {
        "line": 10,
        "column": 4
       },
       "end": {
        "line": 10,
        "column": 28
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
         "name": "a",
         "loc": {
          "start": {
           "line": 11,
           "column": 4
          },
          "end": {
           "line": 11,
           "column": 5
          }
         }
        },
        "property": {
         "type": "Identifier",
         "name": "subscribe",
         "loc": {
          "start": {
           "line": 11,
           "column": 6
          },
          "end": {
           "line": 11,
           "column": 15
          }
         }
        },
        "loc": {
         "start": {
          "line": 11,
          "column": 4
         },
         "end": {
          "line": 11,
          "column": 15
         }
        }
       },
       "arguments": [
        {
         "type": "FunctionExpression",
         "id": null,
         "params": [
          {
           "type": "Identifier",
           "name": "newVal",
           "loc": {
            "start": {
             "line": 11,
             "column": 26
            },
            "end": {
             "line": 11,
             "column": 32
            }
           }
          }
         ],
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
               "type": "Identifier",
               "name": "console",
               "loc": {
                "start": {
                 "line": 12,
                 "column": 8
                },
                "end": {
                 "line": 12,
                 "column": 15
                }
               }
              },
              "property": {
               "type": "Identifier",
               "name": "log",
               "loc": {
                "start": {
                 "line": 12,
                 "column": 16
                },
                "end": {
                 "line": 12,
                 "column": 19
                }
               }
              },
              "loc": {
               "start": {
                "line": 12,
                "column": 8
               },
               "end": {
                "line": 12,
                "column": 19
               }
              }
             },
             "arguments": [
              {
               "type": "Identifier",
               "name": "newVal",
               "loc": {
                "start": {
                 "line": 12,
                 "column": 20
                },
                "end": {
                 "line": 12,
                 "column": 26
                }
               }
              }
             ],
             "loc": {
              "start": {
               "line": 12,
               "column": 8
              },
              "end": {
               "line": 12,
               "column": 27
              }
             }
            },
            "loc": {
             "start": {
              "line": 12,
              "column": 8
             },
             "end": {
              "line": 12,
              "column": 28
             }
            }
           }
          ],
          "loc": {
           "start": {
            "line": 11,
            "column": 34
           },
           "end": {
            "line": 13,
            "column": 5
           }
          }
         },
         "rest": null,
         "generator": false,
         "expression": false,
         "loc": {
          "start": {
           "line": 11,
           "column": 16
          },
          "end": {
           "line": 13,
           "column": 5
          }
         }
        }
       ],
       "loc": {
        "start": {
         "line": 11,
         "column": 4
        },
        "end": {
         "line": 13,
         "column": 6
        }
       }
      },
      "loc": {
       "start": {
        "line": 11,
        "column": 4
       },
       "end": {
        "line": 13,
        "column": 7
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
            "line": 15,
            "column": 8
           },
           "end": {
            "line": 15,
            "column": 9
           }
          }
         },
         "value": {
          "type": "Identifier",
          "name": "a",
          "loc": {
           "start": {
            "line": 15,
            "column": 11
           },
           "end": {
            "line": 15,
            "column": 12
           }
          }
         },
         "kind": "init",
         "loc": {
          "start": {
           "line": 15,
           "column": 8
          },
          "end": {
           "line": 15,
           "column": 12
          }
         }
        }
       ],
       "loc": {
        "start": {
         "line": 14,
         "column": 11
        },
        "end": {
         "line": 16,
         "column": 5
        }
       }
      },
      "loc": {
       "start": {
        "line": 14,
        "column": 4
       },
       "end": {
        "line": 16,
        "column": 6
       }
      }
     }
    ],
    "loc": {
     "start": {
      "line": 9,
      "column": 25
     },
     "end": {
      "line": 17,
      "column": 1
     }
    }
   },
   "rest": null,
   "generator": false,
   "expression": false,
   "loc": {
    "start": {
     "line": 9,
     "column": 0
    },
    "end": {
     "line": 17,
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
   "line": 17,
   "column": 1
  }
 },
 "comments": []
};