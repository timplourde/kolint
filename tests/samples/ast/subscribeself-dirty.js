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
         "name": "observableA",
         "loc": {
          "start": {
           "line": 2,
           "column": 4
          },
          "end": {
           "line": 2,
           "column": 15
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
             "column": 17
            },
            "end": {
             "line": 2,
             "column": 19
            }
           }
          },
          "property": {
           "type": "Identifier",
           "name": "observable",
           "loc": {
            "start": {
             "line": 2,
             "column": 20
            },
            "end": {
             "line": 2,
             "column": 30
            }
           }
          },
          "loc": {
           "start": {
            "line": 2,
            "column": 17
           },
           "end": {
            "line": 2,
            "column": 30
           }
          }
         },
         "arguments": [],
         "loc": {
          "start": {
           "line": 2,
           "column": 17
          },
          "end": {
           "line": 2,
           "column": 32
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
          "column": 32
         }
        }
       },
       {
        "type": "Property",
        "key": {
         "type": "Identifier",
         "name": "observableB",
         "loc": {
          "start": {
           "line": 3,
           "column": 4
          },
          "end": {
           "line": 3,
           "column": 15
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
             "line": 3,
             "column": 17
            },
            "end": {
             "line": 3,
             "column": 19
            }
           }
          },
          "property": {
           "type": "Identifier",
           "name": "observableArray",
           "loc": {
            "start": {
             "line": 3,
             "column": 20
            },
            "end": {
             "line": 3,
             "column": 35
            }
           }
          },
          "loc": {
           "start": {
            "line": 3,
            "column": 17
           },
           "end": {
            "line": 3,
            "column": 35
           }
          }
         },
         "arguments": [],
         "loc": {
          "start": {
           "line": 3,
           "column": 17
          },
          "end": {
           "line": 3,
           "column": 37
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
          "line": 3,
          "column": 37
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
        "line": 4,
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
       "line": 4,
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
     "line": 4,
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
         "line": 6,
         "column": 0
        },
        "end": {
         "line": 6,
         "column": 2
        }
       }
      },
      "property": {
       "type": "Identifier",
       "name": "observableA",
       "loc": {
        "start": {
         "line": 6,
         "column": 3
        },
        "end": {
         "line": 6,
         "column": 14
        }
       }
      },
      "loc": {
       "start": {
        "line": 6,
        "column": 0
       },
       "end": {
        "line": 6,
        "column": 14
       }
      }
     },
     "property": {
      "type": "Identifier",
      "name": "subscribe",
      "loc": {
       "start": {
        "line": 6,
        "column": 15
       },
       "end": {
        "line": 6,
        "column": 24
       }
      }
     },
     "loc": {
      "start": {
       "line": 6,
       "column": 0
      },
      "end": {
       "line": 6,
       "column": 24
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
          "line": 6,
          "column": 35
         },
         "end": {
          "line": 6,
          "column": 41
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
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
           "type": "Identifier",
           "name": "newVal",
           "loc": {
            "start": {
             "line": 7,
             "column": 4
            },
            "end": {
             "line": 7,
             "column": 10
            }
           }
          },
          "right": {
           "type": "CallExpression",
           "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
             "type": "Identifier",
             "name": "newVal",
             "loc": {
              "start": {
               "line": 7,
               "column": 13
              },
              "end": {
               "line": 7,
               "column": 19
              }
             }
            },
            "property": {
             "type": "Identifier",
             "name": "toUpperCase",
             "loc": {
              "start": {
               "line": 7,
               "column": 20
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
              "column": 13
             },
             "end": {
              "line": 7,
              "column": 31
             }
            }
           },
           "arguments": [],
           "loc": {
            "start": {
             "line": 7,
             "column": 13
            },
            "end": {
             "line": 7,
             "column": 33
            }
           }
          },
          "loc": {
           "start": {
            "line": 7,
            "column": 4
           },
           "end": {
            "line": 7,
            "column": 33
           }
          }
         },
         "loc": {
          "start": {
           "line": 7,
           "column": 4
          },
          "end": {
           "line": 7,
           "column": 34
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
            "name": "vm",
            "loc": {
             "start": {
              "line": 8,
              "column": 4
             },
             "end": {
              "line": 8,
              "column": 6
             }
            }
           },
           "property": {
            "type": "Identifier",
            "name": "observableA",
            "loc": {
             "start": {
              "line": 8,
              "column": 7
             },
             "end": {
              "line": 8,
              "column": 18
             }
            }
           },
           "loc": {
            "start": {
             "line": 8,
             "column": 4
            },
            "end": {
             "line": 8,
             "column": 18
            }
           }
          },
          "arguments": [
           {
            "type": "Identifier",
            "name": "newVal",
            "loc": {
             "start": {
              "line": 8,
              "column": 19
             },
             "end": {
              "line": 8,
              "column": 25
             }
            }
           }
          ],
          "loc": {
           "start": {
            "line": 8,
            "column": 4
           },
           "end": {
            "line": 8,
            "column": 26
           }
          }
         },
         "loc": {
          "start": {
           "line": 8,
           "column": 4
          },
          "end": {
           "line": 8,
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
             "type": "Identifier",
             "name": "vm",
             "loc": {
              "start": {
               "line": 9,
               "column": 4
              },
              "end": {
               "line": 9,
               "column": 6
              }
             }
            },
            "property": {
             "type": "Identifier",
             "name": "observableB",
             "loc": {
              "start": {
               "line": 9,
               "column": 7
              },
              "end": {
               "line": 9,
               "column": 18
              }
             }
            },
            "loc": {
             "start": {
              "line": 9,
              "column": 4
             },
             "end": {
              "line": 9,
              "column": 18
             }
            }
           },
           "property": {
            "type": "Identifier",
            "name": "push",
            "loc": {
             "start": {
              "line": 9,
              "column": 19
             },
             "end": {
              "line": 9,
              "column": 23
             }
            }
           },
           "loc": {
            "start": {
             "line": 9,
             "column": 4
            },
            "end": {
             "line": 9,
             "column": 23
            }
           }
          },
          "arguments": [
           {
            "type": "Identifier",
            "name": "newVal",
            "loc": {
             "start": {
              "line": 9,
              "column": 24
             },
             "end": {
              "line": 9,
              "column": 30
             }
            }
           }
          ],
          "loc": {
           "start": {
            "line": 9,
            "column": 4
           },
           "end": {
            "line": 9,
            "column": 31
           }
          }
         },
         "loc": {
          "start": {
           "line": 9,
           "column": 4
          },
          "end": {
           "line": 9,
           "column": 32
          }
         }
        }
       ],
       "loc": {
        "start": {
         "line": 6,
         "column": 43
        },
        "end": {
         "line": 10,
         "column": 1
        }
       }
      },
      "rest": null,
      "generator": false,
      "expression": false,
      "loc": {
       "start": {
        "line": 6,
        "column": 25
       },
       "end": {
        "line": 10,
        "column": 1
       }
      }
     }
    ],
    "loc": {
     "start": {
      "line": 6,
      "column": 0
     },
     "end": {
      "line": 10,
      "column": 2
     }
    }
   },
   "loc": {
    "start": {
     "line": 6,
     "column": 0
    },
    "end": {
     "line": 10,
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
         "name": "observableC",
         "loc": {
          "start": {
           "line": 13,
           "column": 8
          },
          "end": {
           "line": 13,
           "column": 19
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
             "column": 22
            },
            "end": {
             "line": 13,
             "column": 24
            }
           }
          },
          "property": {
           "type": "Identifier",
           "name": "observable",
           "loc": {
            "start": {
             "line": 13,
             "column": 25
            },
            "end": {
             "line": 13,
             "column": 35
            }
           }
          },
          "loc": {
           "start": {
            "line": 13,
            "column": 22
           },
           "end": {
            "line": 13,
            "column": 35
           }
          }
         },
         "arguments": [],
         "loc": {
          "start": {
           "line": 13,
           "column": 22
          },
          "end": {
           "line": 13,
           "column": 37
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
          "column": 37
         }
        }
       },
       {
        "type": "VariableDeclarator",
        "id": {
         "type": "Identifier",
         "name": "observableD",
         "loc": {
          "start": {
           "line": 14,
           "column": 8
          },
          "end": {
           "line": 14,
           "column": 19
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
             "line": 14,
             "column": 22
            },
            "end": {
             "line": 14,
             "column": 24
            }
           }
          },
          "property": {
           "type": "Identifier",
           "name": "observableArray",
           "loc": {
            "start": {
             "line": 14,
             "column": 25
            },
            "end": {
             "line": 14,
             "column": 40
            }
           }
          },
          "loc": {
           "start": {
            "line": 14,
            "column": 22
           },
           "end": {
            "line": 14,
            "column": 40
           }
          }
         },
         "arguments": [],
         "loc": {
          "start": {
           "line": 14,
           "column": 22
          },
          "end": {
           "line": 14,
           "column": 42
          }
         }
        },
        "loc": {
         "start": {
          "line": 14,
          "column": 8
         },
         "end": {
          "line": 14,
          "column": 42
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
        "line": 14,
        "column": 43
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
         "name": "observableC",
         "loc": {
          "start": {
           "line": 15,
           "column": 4
          },
          "end": {
           "line": 15,
           "column": 15
          }
         }
        },
        "property": {
         "type": "Identifier",
         "name": "subscribe",
         "loc": {
          "start": {
           "line": 15,
           "column": 16
          },
          "end": {
           "line": 15,
           "column": 25
          }
         }
        },
        "loc": {
         "start": {
          "line": 15,
          "column": 4
         },
         "end": {
          "line": 15,
          "column": 25
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
             "line": 15,
             "column": 36
            },
            "end": {
             "line": 15,
             "column": 42
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
             "type": "AssignmentExpression",
             "operator": "=",
             "left": {
              "type": "Identifier",
              "name": "newVal",
              "loc": {
               "start": {
                "line": 16,
                "column": 8
               },
               "end": {
                "line": 16,
                "column": 14
               }
              }
             },
             "right": {
              "type": "CallExpression",
              "callee": {
               "type": "MemberExpression",
               "computed": false,
               "object": {
                "type": "Identifier",
                "name": "newVal",
                "loc": {
                 "start": {
                  "line": 16,
                  "column": 17
                 },
                 "end": {
                  "line": 16,
                  "column": 23
                 }
                }
               },
               "property": {
                "type": "Identifier",
                "name": "toUpperCase",
                "loc": {
                 "start": {
                  "line": 16,
                  "column": 24
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
                 "column": 17
                },
                "end": {
                 "line": 16,
                 "column": 35
                }
               }
              },
              "arguments": [],
              "loc": {
               "start": {
                "line": 16,
                "column": 17
               },
               "end": {
                "line": 16,
                "column": 37
               }
              }
             },
             "loc": {
              "start": {
               "line": 16,
               "column": 8
              },
              "end": {
               "line": 16,
               "column": 37
              }
             }
            },
            "loc": {
             "start": {
              "line": 16,
              "column": 8
             },
             "end": {
              "line": 16,
              "column": 38
             }
            }
           },
           {
            "type": "ExpressionStatement",
            "expression": {
             "type": "CallExpression",
             "callee": {
              "type": "Identifier",
              "name": "observableC",
              "loc": {
               "start": {
                "line": 17,
                "column": 8
               },
               "end": {
                "line": 17,
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
                 "line": 17,
                 "column": 20
                },
                "end": {
                 "line": 17,
                 "column": 26
                }
               }
              }
             ],
             "loc": {
              "start": {
               "line": 17,
               "column": 8
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
              "column": 8
             },
             "end": {
              "line": 17,
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
               "name": "observableD",
               "loc": {
                "start": {
                 "line": 18,
                 "column": 8
                },
                "end": {
                 "line": 18,
                 "column": 19
                }
               }
              },
              "property": {
               "type": "Identifier",
               "name": "push",
               "loc": {
                "start": {
                 "line": 18,
                 "column": 20
                },
                "end": {
                 "line": 18,
                 "column": 24
                }
               }
              },
              "loc": {
               "start": {
                "line": 18,
                "column": 8
               },
               "end": {
                "line": 18,
                "column": 24
               }
              }
             },
             "arguments": [
              {
               "type": "Identifier",
               "name": "newVal",
               "loc": {
                "start": {
                 "line": 18,
                 "column": 25
                },
                "end": {
                 "line": 18,
                 "column": 31
                }
               }
              }
             ],
             "loc": {
              "start": {
               "line": 18,
               "column": 8
              },
              "end": {
               "line": 18,
               "column": 32
              }
             }
            },
            "loc": {
             "start": {
              "line": 18,
              "column": 8
             },
             "end": {
              "line": 18,
              "column": 33
             }
            }
           }
          ],
          "loc": {
           "start": {
            "line": 15,
            "column": 44
           },
           "end": {
            "line": 19,
            "column": 5
           }
          }
         },
         "rest": null,
         "generator": false,
         "expression": false,
         "loc": {
          "start": {
           "line": 15,
           "column": 26
          },
          "end": {
           "line": 19,
           "column": 5
          }
         }
        }
       ],
       "loc": {
        "start": {
         "line": 15,
         "column": 4
        },
        "end": {
         "line": 19,
         "column": 6
        }
       }
      },
      "loc": {
       "start": {
        "line": 15,
        "column": 4
       },
       "end": {
        "line": 19,
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
          "name": "observableC",
          "loc": {
           "start": {
            "line": 21,
            "column": 8
           },
           "end": {
            "line": 21,
            "column": 19
           }
          }
         },
         "value": {
          "type": "Identifier",
          "name": "observableC",
          "loc": {
           "start": {
            "line": 21,
            "column": 21
           },
           "end": {
            "line": 21,
            "column": 32
           }
          }
         },
         "kind": "init",
         "loc": {
          "start": {
           "line": 21,
           "column": 8
          },
          "end": {
           "line": 21,
           "column": 32
          }
         }
        },
        {
         "type": "Property",
         "key": {
          "type": "Identifier",
          "name": "observableD",
          "loc": {
           "start": {
            "line": 22,
            "column": 8
           },
           "end": {
            "line": 22,
            "column": 19
           }
          }
         },
         "value": {
          "type": "Identifier",
          "name": "observableD",
          "loc": {
           "start": {
            "line": 22,
            "column": 21
           },
           "end": {
            "line": 22,
            "column": 32
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
           "column": 32
          }
         }
        }
       ],
       "loc": {
        "start": {
         "line": 20,
         "column": 11
        },
        "end": {
         "line": 23,
         "column": 5
        }
       }
      },
      "loc": {
       "start": {
        "line": 20,
        "column": 4
       },
       "end": {
        "line": 23,
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
      "line": 24,
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
     "line": 24,
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
   "line": 24,
   "column": 1
  }
 },
 "comments": []
};